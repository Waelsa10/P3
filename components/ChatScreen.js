import React, { useRef, useState, useEffect, useMemo, useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";
import Message from "./Message";
import { DarkModeContext } from "./DarkModeProvider";
import { uploadToCloudinary } from "../lib/cloudinary";

import {
  collection,
  query,
  orderBy,
  where,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
  enableNetwork,
  disableNetwork,
} from "firebase/firestore";

import { 
  Avatar, 
  IconButton, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  CircularProgress,
  Popover,
  Tabs,
  Tab,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";
import CloseIcon from "@mui/icons-material/Close";
import StopIcon from "@mui/icons-material/Stop";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";

import TimeAgo from "timeago-react";

// Emoji categories
const EMOJI_CATEGORIES = {
  recent: { name: "Recent", icon: "🕒" },
  smileys: { name: "Smileys & People", icon: "😀" },
  animals: { name: "Animals & Nature", icon: "🐶" },
  food: { name: "Food & Drink", icon: "🍔" },
  activities: { name: "Activities", icon: "⚽" },
  travel: { name: "Travel & Places", icon: "✈️" },
  objects: { name: "Objects", icon: "💡" },
  symbols: { name: "Symbols", icon: "❤️" },
  flags: { name: "Flags", icon: "🏁" },
};

// Comprehensive emoji list
const EMOJIS = {
  smileys: [
    "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇",
    "🥰", "😍", "🤩", "😘", "😗", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝",
    "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄",
    "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧",
    "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟",
    "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢",
    "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬",
    "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺",
    "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "👋", "🤚", "🖐️", "✋", "🖖",
    "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇",
    "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏",
    "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀",
    "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "💋", "🩸"
  ],
  animals: [
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷",
    "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥",
    "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🪱", "🐛", "🦋", "🐌",
    "🐞", "🐜", "🪰", "🪲", "🪳", "🦟", "🦗", "🕷️", "🕸️", "🦂", "🐢", "🐍", "🦎",
    "🦖", "🦕", "🐙", "🦑", "🦐", "🦞", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋",
    "🦈", "🐊", "🐅", "🐆", "🦓", "🦍", "🦧", "🦣", "🐘", "🦛", "🦏", "🐪", "🐫",
    "🦒", "🦘", "🦬", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🦙", "🐐", "🦌",
    "🐕", "🐩", "🦮", "🐕‍🦺", "🐈", "🐈‍⬛", "🪶", "🐓", "🦃", "🦤", "🦚", "🦜", "🦢",
    "🦩", "🕊️", "🐇", "🦝", "🦨", "🦡", "🦫", "🦦", "🦥", "🐁", "🐀", "🐿️", "🦔",
    "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🎍", "🪴", "🎋", "🍃", "🍂", "🍁",
    "🍄", "🐚", "🪨", "🌾", "💐", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻", "🌞",
    "🌝", "🌛", "🌜", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌙",
    "🌎", "🌍", "🌏", "🪐", "💫", "⭐", "🌟", "✨", "⚡", "☄️", "💥", "🔥", "🌪️",
    "🌈", "☀️", "🌤️", "⛅", "🌥️", "☁️", "🌦️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️", "☃️",
    "⛄", "🌬️", "💨", "💧", "💦", "☔", "☂️", "🌊", "🌫️"
  ],
  food: [
    "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍈", "🍒", "🍑",
    "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶️", "🫑", "🌽",
    "🥕", "🫒", "🧄", "🧅", "🥔", "🍠", "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚",
    "🍳", "🧈", "🥞", "🧇", "🥓", "🥩", "🍗", "🍖", "🦴", "🌭", "🍔", "🍟", "🍕",
    "🫓", "🥪", "🥙", "🧆", "🌮", "🌯", "🫔", "🥗", "🥘", "🫕", "🥫", "🍝", "🍜",
    "🍲", "🍛", "🍣", "🍱", "🥟", "🦪", "🍤", "🍙", "🍚", "🍘", "🍥", "🥠", "🥮",
    "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫",
    "🍿", "🍩", "🍪", "🌰", "🥜", "🍯", "🥛", "🍼", "🫖", "☕", "🍵", "🧃", "🥤",
    "🧋", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🧉", "🍾", "🧊", "🥄",
    "🍴", "🍽️", "🥣", "🥡", "🥢", "🧂"
  ],
  activities: [
    "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🪀", "🏓", "🏸",
    "🏒", "🏑", "🥍", "🏏", "🪃", "🥅", "⛳", "🪁", "🏹", "🎣", "🤿", "🥊", "🥋",
    "🎽", "🛹", "🛼", "🛷", "⛸️", "🥌", "🎿", "⛷️", "🏂", "🪂", "🏋️", "🤼", "🤸",
    "🤺", "⛹️", "🤾", "🏌️", "🏇", "🧘", "🏄", "🏊", "🤽", "🚣", "🧗", "🚵", "🚴",
    "🏆", "🥇", "🥈", "🥉", "🏅", "🎖️", "🏵️", "🎗️", "🎫", "🎟️", "🎪", "🤹", "🎭",
    "🩰", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🪘", "🎷", "🎺", "🪗", "🎸",
    "🪕", "🎻", "🎲", "♟️", "🎯", "🎳", "🎮", "🎰", "🧩"
  ],
  travel: [
    "🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛",
    "🚜", "🦯", "🦽", "🦼", "🛴", "🚲", "🛵", "🏍️", "🛺", "🚨", "🚔", "🚍", "🚘",
    "🚖", "🚡", "🚠", "🚟", "🚃", "🚋", "🚞", "🚝", "🚄", "🚅", "🚈", "🚂", "🚆",
    "🚇", "🚊", "🚉", "✈️", "🛫", "🛬", "🛩️", "💺", "🛰️", "🚀", "🛸", "🚁", "🛶",
    "⛵", "🚤", "🛥️", "🛳️", "⛴️", "🚢", "⚓", "🪝", "⛽", "🚧", "🚦", "🚥", "🚏",
    "🗺️", "🗿", "🗽", "🗼", "🏰", "🏯", "🏟️", "🎡", "🎢", "🎠", "⛲", "⛱️", "🏖️",
    "🏝️", "🏜️", "🌋", "⛰️", "🏔️", "🗻", "🏕️", "⛺", "🛖", "🏠", "🏡", "🏘️", "🏚️",
    "🏗️", "🏭", "🏢", "🏬", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏩", "💒",
    "🏛️", "⛪", "🕌", "🕍", "🛕", "🕋", "⛩️", "🛤️", "🛣️", "🗾", "🎑", "🏞️", "🌅",
    "🌄", "🌠", "🎇", "🎆", "🌇", "🌆", "🏙️", "🌃", "🌌", "🌉", "🌁"
  ],
  objects: [
    "⌚", "📱", "📲", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗜️", "💽", "💾",
    "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽️", "🎞️", "📞", "☎️", "📟", "📠",
    "📺", "📻", "🎙️", "🎚️", "🎛️", "🧭", "⏱️", "⏲️", "⏰", "🕰️", "⌛", "⏳", "📡",
    "🔋", "🔌", "💡", "🔦", "🕯️", "🪔", "🧯", "🛢️", "💸", "💵", "💴", "💶", "💷",
    "🪙", "💰", "💳", "💎", "⚖️", "🪜", "🧰", "🪛", "🔧", "🔨", "⚒️", "🛠️", "⛏️",
    "🪚", "🔩", "⚙️", "🪤", "🧱", "⛓️", "🧲", "🔫", "💣", "🧨", "🪓", "🔪", "🗡️",
    "⚔️", "🛡️", "🚬", "⚰️", "🪦", "⚱️", "🏺", "🔮", "📿", "🧿", "💈", "⚗️", "🔭",
    "🔬", "🕳️", "🩹", "🩺", "💊", "💉", "🩸", "🧬", "🦠", "🧫", "🧪", "🌡️", "🧹",
    "🪠", "🧺", "🧻", "🚽", "🚰", "🚿", "🛁", "🛀", "🧼", "🪥", "🪒", "🧽", "🪣",
    "🧴", "🛎️", "🔑", "🗝️", "🚪", "🪑", "🛋️", "🛏️", "🛌", "🧸", "🪆", "🖼️", "🪞",
    "🪟", "🛍️", "🛒", "🎁", "🎈", "🎏", "🎀", "🪄", "🪅", "🎊", "🎉", "🎎", "🏮",
    "🎐", "🧧", "✉️", "📩", "📨", "📧", "💌", "📥", "📤", "📦", "🏷️", "🪧", "📪",
    "📫", "📬", "📭", "📮", "📯", "📜", "📃", "📄", "📑", "🧾", "📊", "📈", "📉",
    "🗒️", "🗓️", "📆", "📅", "🗑️", "📇", "🗃️", "🗳️", "🗄️", "📋", "📁", "📂", "🗂️",
    "🗞️", "📰", "📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📖", "🔖", "🧷",
    "🔗", "📎", "🖇️", "📐", "📏", "🧮", "📌", "📍", "✂️", "🖊️", "🖋️", "✒️", "🖌️",
    "🖍️", "📝", "✏️", "🔍", "🔎", "🔏", "🔐", "🔒", "🔓"
  ],
  symbols: [
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞",
    "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️", "☪️", "🕉️", "☸️", "✡️", "🔯",
    "🕎", "☯️", "☦️", "🛐", "⛎", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐",
    "♑", "♒", "♓", "🆔", "⚛️", "🉑", "☢️", "☣️", "📴", "📳", "🈶", "🈚", "🈸",
    "🈺", "🈷️", "✴️", "🆚", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈹", "🈲", "🅰️",
    "🅱️", "🆎", "🆑", "🅾️", "🆘", "❌", "⭕", "🛑", "⛔", "📛", "🚫", "💯", "💢",
    "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "🚭", "❗", "❕", "❓", "❔", "‼️",
    "⁉️", "🔅", "🔆", "〽️", "⚠️", "🚸", "🔱", "⚜️", "🔰", "♻️", "✅", "🈯", "💹",
    "❇️", "✳️", "❎", "🌐", "💠", "Ⓜ️", "🌀", "💤", "🏧", "🚾", "♿", "🅿️", "🛗",
    "🈳", "🈂️", "🛂", "🛃", "🛄", "🛅", "🚹", "🚺", "🚼", "⚧️", "🚻", "🚮", "🎦",
    "📶", "🈁", "🔣", "ℹ️", "🔤", "🔡", "🔠", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓",
    "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "🔢", "#️⃣",
    "*️⃣", "⏏️", "▶️", "⏸️", "⏯️", "⏹️", "⏺️", "⏭️", "⏮️", "⏩", "⏪", "⏫", "⏬",
    "◀️", "🔼", "🔽", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️",
    "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "🔄", "🔃", "🎵", "🎶", "➕", "➖",
    "➗", "✖️", "🟰", "♾️", "💲", "💱", "™️", "©️", "®️", "〰️", "➰", "➿", "🔚",
    "🔙", "🔛", "🔝", "🔜", "✔️", "☑️", "🔘", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣",
    "⚫", "⚪", "🟤", "🔺", "🔻", "🔸", "🔹", "🔶", "🔷", "🔳", "🔲", "▪️", "▫️",
    "◾", "◽", "◼️", "◻️", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "⬛", "⬜", "🟫",
    "🔈", "🔇", "🔉", "🔊", "🔔", "🔕", "📣", "📢", "👁️‍🗨️", "💬", "💭", "🗯️", "♠️",
    "♣️", "♥️", "♦️", "🃏", "🎴", "🀄", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖",
    "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣",
    "🕤", "🕥", "🕦", "🕧"
  ],
  flags: [
    "🏳️", "🏴", "🏁", "🚩", "🏳️‍🌈", "🏳️‍⚧️", "🏴‍☠️", "🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿",
    "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹",
    "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹",
    "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇰🇭",
    "🇨🇲", "🇨🇦", "🇮🇨", "🇨🇻", "🇧🇶", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇽",
    "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺", "🇨🇼",
    "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷",
    "🇪🇪", "🇸🇿", "🇪🇹", "🇪🇺", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫",
    "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵",
    "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇰", "🇭🇺", "🇮🇸",
    "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇱", "🇮🇹", "🇯🇲", "🇯🇵", "🎌", "🇯🇪",
    "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸",
    "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱",
    "🇲🇹", "🇲🇭", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳",
    "🇲🇪", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿",
    "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇰🇵", "🇲🇰", "🇲🇵", "🇳🇴", "🇴🇲", "🇵🇰",
    "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇳", "🇵🇱", "🇵🇹", "🇵🇷",
    "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇺", "🇷🇼", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸",
    "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇬🇸", "🇸🇧", "🇸🇴", "🇿🇦", "🇰🇷",
    "🇸🇸", "🇪🇸", "🇱🇰", "🇧🇱", "🇸🇭", "🇰🇳", "🇱🇨", "🇵🇲", "🇻🇨", "🇸🇩", "🇸🇷",
    "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇼", "🇹🇯", "🇹🇿", "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇰", "🇹🇴",
    "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇻🇮", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧",
    "🏴󐁧󐁢󐁥󐁮󐁧󐁿", "🏴󐁧󐁢󐁳󐁣󐁴󐁿", "🏴󐁧󐁢󐁷󐁬󐁳󐁿", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪",
    "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"
  ],
};

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const endOfMessagesRef = useRef(null);
  const fileInputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const inputRef = useRef(null);
  
  const [input, setInput] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState(null);
  const [sendingError, setSendingError] = useState(null);
  
  // File attachment states
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [showFileConfirmation, setShowFileConfirmation] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  // Profile dialog state
  const [showProfile, setShowProfile] = useState(false);
  
  // Voice recording states
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);

  // Emoji picker states
  const [emojiAnchorEl, setEmojiAnchorEl] = useState(null);
  const [selectedEmojiCategory, setSelectedEmojiCategory] = useState("recent");
  const [recentEmojis, setRecentEmojis] = useState([]);
  const [emojiSearchTerm, setEmojiSearchTerm] = useState("");

  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };

  // Load recent emojis from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("recentEmojis");
    if (stored) {
      setRecentEmojis(JSON.parse(stored));
    }
  }, []);

  // Save recent emojis to localStorage
  const saveRecentEmoji = (emoji) => {
    const updated = [emoji, ...recentEmojis.filter((e) => e !== emoji)].slice(0, 30);
    setRecentEmojis(updated);
    localStorage.setItem("recentEmojis", JSON.stringify(updated));
  };

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      enableNetwork(db);
    };

    const handleOffline = () => {
      setIsOnline(false);
      disableNetwork(db);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Recording timer
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const chatId = router?.query?.id || null;

  const messagesRef = useMemo(() => {
    if (!chatId) return null;
    return collection(db, "chats", chatId, "messages");
  }, [chatId]);

  const messagesQuery = useMemo(() => {
    if (!messagesRef) return null;
    return query(messagesRef, orderBy("timestamp", "asc"));
  }, [messagesRef]);

  const [messagesSnapshot] = useCollection(messagesQuery || null);

  const usersRef = collection(db, "users");

  const recipientEmail = user && chat ? getRecipientEmail(chat.users, user) : null;
  const recipientQuery = recipientEmail ? query(usersRef, where("email", "==", recipientEmail)) : null;
  const [recipientSnapshot] = useCollection(recipientQuery || null);

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toMillis(),
          }}
        />
      ));
    } else {
      return messages ? JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      )) : null;
    }
  };

  const scrollToBottom = () => {
    if (endOfMessagesRef?.current) {
      endOfMessagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesSnapshot]);

  // Handle emoji selection
  const handleEmojiClick = (emoji) => {
    const cursorPosition = inputRef.current?.selectionStart || input.length;
    const textBeforeCursor = input.slice(0, cursorPosition);
    const textAfterCursor = input.slice(cursorPosition);
    
    setInput(textBeforeCursor + emoji + textAfterCursor);
    saveRecentEmoji(emoji);
    
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        const newPosition = cursorPosition + emoji.length;
        inputRef.current.setSelectionRange(newPosition, newPosition);
      }
    }, 0);
  };

  // Open emoji picker
  const handleEmojiPickerOpen = (event) => {
    setEmojiAnchorEl(event.currentTarget);
  };

  // Close emoji picker
  const handleEmojiPickerClose = () => {
    setEmojiAnchorEl(null);
    setEmojiSearchTerm("");
  };

  // Filter emojis by search term
  const getFilteredEmojis = () => {
    if (selectedEmojiCategory === "recent") {
      return recentEmojis;
    }

    const categoryEmojis = EMOJIS[selectedEmojiCategory] || [];
    
    if (!emojiSearchTerm) {
      return categoryEmojis;
    }

    return categoryEmojis;
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
      
      setShowFileConfirmation(true);
    }
  };

  // ✅ ADDED: Cancel file selection function
  const cancelFileSelection = () => {
    setSelectedFile(null);
    setFilePreview(null);
    setShowFileConfirmation(false);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Send message with file using Cloudinary
  const sendFileMessage = async () => {
    if (!selectedFile || !chatId || !user) return;

    setIsUploading(true);
    setSendingError(null);

    try {
      // Upload to Cloudinary with progress tracking
      const fileURL = await uploadToCloudinary(selectedFile, (progress) => {
        setUploadProgress(progress);
      });

      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );

      await addDoc(collection(db, "chats", chatId, "messages"), {
        timestamp: serverTimestamp(),
        message: input || "",
        user: user.email,
        photoURL: user.photoURL,
        fileURL: fileURL,
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        fileSize: selectedFile.size,
      });

      // Reset states
      setInput("");
      setSelectedFile(null);
      setFilePreview(null);
      setShowFileConfirmation(false);
      setUploadProgress(0);
      scrollToBottom();
    } catch (error) {
      console.error("Error sending file:", error);
      setSendingError(`Failed to send file: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  // Send text message
  const sendMessage = async (e) => {
    e.preventDefault();
    setSendingError(null);

    if (!input?.trim() || !chatId || !user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );

      await addDoc(collection(db, "chats", chatId, "messages"), {
        timestamp: serverTimestamp(),
        message: input,
        user: user.email,
        photoURL: user.photoURL,
      });

      setInput("");
      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error);
      setSendingError("Failed to send message. Please try again.");
    }
  };

  // Start voice recording
  // Start voice recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Check for supported MIME types
      let mimeType = 'audio/webm';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'audio/webm;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = 'audio/ogg;codecs=opus';
          if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'audio/mp4';
            if (!MediaRecorder.isTypeSupported(mimeType)) {
              mimeType = ''; // Let browser choose
            }
          }
        }
      }
      
      console.log('Using MIME type:', mimeType || 'default');
      
      const options = mimeType ? { mimeType } : {};
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        console.log('Data available:', event.data.size, 'bytes');
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        console.log('Recording stopped, chunks:', audioChunksRef.current.length);
        const audioBlob = new Blob(audioChunksRef.current, { 
          type: mimeType || 'audio/webm' 
        });
        
        console.log('Blob size:', audioBlob.size);
        
        // Check if blob has data
        if (audioBlob.size > 0) {
          setAudioBlob(audioBlob);
        } else {
          console.error('No audio data captured');
          setSendingError("Recording failed: No audio data captured. Please try again.");
        }
        
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.onerror = (event) => {
        console.error('MediaRecorder error:', event.error);
        setSendingError(`Recording error: ${event.error.name}`);
      };

      // Start with timeslice to ensure data is collected periodically
      mediaRecorder.start(100); // Collect data every 100ms
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      setSendingError("Failed to access microphone. Please check permissions.");
    }
  };
  // Stop voice recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Send voice message using Cloudinary
  const sendVoiceMessage = async () => {
    if (!audioBlob || !chatId || !user) return;

    setIsUploading(true);
    setSendingError(null);

    try {
      // Upload to Cloudinary with progress tracking
      const voiceURL = await uploadToCloudinary(audioBlob, (progress) => {
        setUploadProgress(progress);
      });

      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );

      await addDoc(collection(db, "chats", chatId, "messages"), {
        timestamp: serverTimestamp(),
        message: "🎤 Voice message",
        user: user.email,
        photoURL: user.photoURL,
        voiceURL: voiceURL,
        voiceDuration: recordingTime,
      });

      setAudioBlob(null);
      setUploadProgress(0);
      scrollToBottom();
    } catch (error) {
      console.error("Error sending voice message:", error);
      setSendingError(`Failed to send voice message: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  // Cancel voice recording
  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    setAudioBlob(null);
    setRecordingTime(0);
  };

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const openEmojiPicker = Boolean(emojiAnchorEl);

  if (!isOnline) {
    return (
      <Container darkMode={darkMode}>
        <OfflineMessage darkMode={darkMode}>
          You are currently offline. Please check your internet connection.
        </OfflineMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container darkMode={darkMode}>
        <ErrorMessage darkMode={darkMode}>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container darkMode={darkMode}>
      <Header darkMode={darkMode}>
        {recipient ? (
          <Avatar src={recipient.photoURL} />
        ) : (
          <Avatar>{recipientEmail ? recipientEmail[0] : "?"}</Avatar>
        )}
        <HeaderInformation darkMode={darkMode}>
          <h3>{recipientEmail ?? "Loading..."}</h3>
          <p>
            Last active:{" "}
            {recipientSnapshot ? (
              recipient?.lastSeen?.toDate ? (
                <TimeAgo datetime={recipient.lastSeen.toDate()} />
              ) : (
                "user not registered"
              )
            ) : (
              "Loading Last active..."
            )}
          </p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton onClick={() => fileInputRef.current?.click()}>
            <AttachFileIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
          </IconButton>
          <input
            ref={fileInputRef}
            type="file"
            hidden
            onChange={handleFileSelect}
            accept="*/*"
          />
          <IconButton onClick={() => setShowProfile(true)}>
            <MoreVertIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer darkMode={darkMode}>
        {showMessages()}
        {sendingError && <ErrorAlert darkMode={darkMode}>{sendingError}</ErrorAlert>}
        <EndOfMessage ref={endOfMessagesRef} />
      </MessageContainer>

      {/* Emoji Picker Popover */}
      <Popover
        open={openEmojiPicker}
        anchorEl={emojiAnchorEl}
        onClose={handleEmojiPickerClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            backgroundColor: darkMode ? '#2a2a2a' : 'white',
            color: darkMode ? '#e0e0e0' : 'black',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          },
        }}
      >
        <EmojiPickerContainer darkMode={darkMode}>
          <EmojiPickerHeader darkMode={darkMode}>
            <h3>Emojis</h3>
            <IconButton onClick={handleEmojiPickerClose} size="small">
              <CloseIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
            </IconButton>
          </EmojiPickerHeader>

          <EmojiSearchContainer darkMode={darkMode}>
            <SearchIcon style={{ color: darkMode ? '#888' : '#666' }} />
            <EmojiSearchInput
              darkMode={darkMode}
              placeholder="Search emoji..."
              value={emojiSearchTerm}
              onChange={(e) => setEmojiSearchTerm(e.target.value)}
            />
          </EmojiSearchContainer>

          <EmojiCategoryTabs
            value={selectedEmojiCategory}
            onChange={(e, newValue) => setSelectedEmojiCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            darkMode={darkMode}
            TabIndicatorProps={{
              style: {
                backgroundColor: darkMode ? '#d32f2f' : '#f44336',
              },
            }}
          >
            {Object.entries(EMOJI_CATEGORIES).map(([key, { name, icon }]) => (
              <Tab
                key={key}
                value={key}
                label={icon}
                title={name}
                style={{
                  color: darkMode ? '#e0e0e0' : 'black',
                  minWidth: 50,
                }}
              />
            ))}
          </EmojiCategoryTabs>

          <EmojiGrid darkMode={darkMode}>
            {getFilteredEmojis().length > 0 ? (
              getFilteredEmojis().map((emoji, index) => (
                <EmojiButton
                  key={`${emoji}-${index}`}
                  onClick={() => handleEmojiClick(emoji)}
                  darkMode={darkMode}
                >
                  {emoji}
                </EmojiButton>
              ))
            ) : (
              <NoEmojisMessage darkMode={darkMode}>
                {selectedEmojiCategory === "recent"
                  ? "No recent emojis. Start using emojis!"
                  : "No emojis found"}
              </NoEmojisMessage>
            )}
          </EmojiGrid>
        </EmojiPickerContainer>
      </Popover>

      {/* File Confirmation Dialog */}
      <Dialog
        open={showFileConfirmation}
        onClose={cancelFileSelection}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: darkMode ? '#2a2a2a' : 'white',
            color: darkMode ? '#e0e0e0' : 'black',
          },
        }}
      >
        <DialogTitle style={{ color: darkMode ? '#e0e0e0' : 'black' }}>
          Send File
          <IconButton
            onClick={cancelFileSelection}
            style={{ position: 'absolute', right: 8, top: 8, color: darkMode ? '#e0e0e0' : 'inherit' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {filePreview && (
            <FilePreview>
              <img src={filePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
            </FilePreview>
          )}
          <FileInfo darkMode={darkMode}>
            <p><strong>File:</strong> {selectedFile?.name}</p>
            <p><strong>Size:</strong> {(selectedFile?.size / 1024 / 1024).toFixed(2)} MB</p>
            <p><strong>Type:</strong> {selectedFile?.type || 'Unknown'}</p>
          </FileInfo>
          <FileInput
            darkMode={darkMode}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a message (optional)"
            type="text"
          />
          {isUploading && (
            <UploadProgress>
              <CircularProgress variant="determinate" value={uploadProgress} />
              <p>{Math.round(uploadProgress)}%</p>
            </UploadProgress>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelFileSelection} style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            Cancel
          </Button>
          <Button
            onClick={sendFileMessage}
            variant="contained"
            disabled={isUploading}
            style={{ backgroundColor: darkMode ? '#d32f2f' : '#f44336', color: 'white' }}
            startIcon={<SendIcon />}
          >
            {isUploading ? 'Sending...' : 'Send'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Profile Dialog */}
      <Dialog
        open={showProfile}
        onClose={() => setShowProfile(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: darkMode ? '#2a2a2a' : 'white',
            color: darkMode ? '#e0e0e0' : 'black',
          },
        }}
      >
        <DialogTitle style={{ color: darkMode ? '#e0e0e0' : 'black' }}>
          User Profile
          <IconButton
            onClick={() => setShowProfile(false)}
            style={{ position: 'absolute', right: 8, top: 8, color: darkMode ? '#e0e0e0' : 'inherit' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ProfileContainer>
            <Avatar
              src={recipient?.photoURL}
              style={{ width: 100, height: 100, margin: '0 auto 20px' }}
            >
              {recipientEmail?.[0]?.toUpperCase()}
            </Avatar>
            <ProfileInfo darkMode={darkMode}>
              <h2>{recipientEmail}</h2>
              <p>
                <strong>Last Seen:</strong>{" "}
                {recipient?.lastSeen?.toDate ? (
                  <TimeAgo datetime={recipient.lastSeen.toDate()} />
                ) : (
                  "Not available"
                )}
              </p>
              {recipient?.displayName && (
                <p><strong>Name:</strong> {recipient.displayName}</p>
              )}
            </ProfileInfo>
          </ProfileContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowProfile(false)} style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Voice Recording Dialog */}
      <Dialog
        open={audioBlob !== null}
        onClose={cancelRecording}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: darkMode ? '#2a2a2a' : 'white',
            color: darkMode ? '#e0e0e0' : 'black',
          },
        }}
      >
        <DialogTitle style={{ color: darkMode ? '#e0e0e0' : 'black' }}>
          Voice Message Recorded
        </DialogTitle>
        <DialogContent>
          <VoicePreview darkMode={darkMode}>
            <p>Duration: {formatTime(recordingTime)}</p>
            {audioBlob && (
              <>
                <p style={{ fontSize: '12px', color: darkMode ? '#888' : '#666' }}>
                  Size: {(audioBlob.size / 1024).toFixed(2)} KB
                </p>
                <p style={{ fontSize: '12px', color: darkMode ? '#888' : '#666' }}>
                  Type: {audioBlob.type}
                </p>
                <audio 
                  controls 
                  src={URL.createObjectURL(audioBlob)} 
                  style={{ width: '100%', marginTop: 10 }}
                  onError={(e) => {
                    console.error('Audio playback error:', e);
                    setSendingError('Failed to play audio. The recording might be corrupted.');
                  }}
                />
              </>
            )}
          </VoicePreview>
          {isUploading && (
            <UploadProgress>
              <CircularProgress variant="determinate" value={uploadProgress} />
              <p>{Math.round(uploadProgress)}%</p>
            </UploadProgress>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelRecording} disabled={isUploading} style={{ color: darkMode ? '#e0e0e0' : 'inherit' }}>
            Cancel
          </Button>
          <Button
            onClick={sendVoiceMessage}
            variant="contained"
            disabled={isUploading || !audioBlob || audioBlob.size === 0}
            style={{ backgroundColor: darkMode ? '#d32f2f' : '#f44336', color: 'white' }}
            startIcon={<SendIcon />}
          >
            {isUploading ? 'Sending...' : 'Send'}
          </Button>
        </DialogActions>
      </Dialog>

      <InputContainer onSubmit={sendMessage} darkMode={darkMode}>
        <IconButton onClick={handleEmojiPickerOpen}>
          <InsertEmoticonIcon style={{ color: darkMode ? '#e0e0e0' : 'inherit' }} />
        </IconButton>
        
        {isRecording ? (
          <RecordingIndicator darkMode={darkMode}>
            <RecordingDot />
            <span>Recording... {formatTime(recordingTime)}</span>
            <IconButton onClick={stopRecording} style={{ color: darkMode ? '#e0e0e0' : '#f44336' }}>
              <StopIcon />
            </IconButton>
          </RecordingIndicator>
        ) : (
          <Input
            ref={inputRef}
            darkMode={darkMode}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
        )}
        
        {!isRecording && (
          <SendButton
            type="submit"
            disabled={!input?.trim()}
            darkMode={darkMode}
          >
            Send
          </SendButton>
        )}
        
        <IconButton onClick={isRecording ? cancelRecording : startRecording}>
          <MicIcon style={{ color: isRecording ? '#f44336' : (darkMode ? '#e0e0e0' : 'inherit') }} />
        </IconButton>
      </InputContainer>
    </Container>
  );
}

export default ChatScreen;

// Styled Components (keep all your existing styled components here)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
`;

const Header = styled.div`
  position: sticky;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${props => props.darkMode ? '#333' : 'whitesmoke'};
  flex-shrink: 0;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  > h3 {
    margin-bottom: 3px;
    color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  }
  > p {
    font-size: 14px;
    color: ${props => props.darkMode ? '#aaa' : 'gray'};
  }
`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
  padding: 30px;
  background-color: ${props => props.darkMode ? '#0d1117' : '#e5ded8'};
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
  gap: 10px;
  flex-shrink: 0;
  border-top: 1px solid ${props => props.darkMode ? '#333' : 'whitesmoke'};
`;

const Input = styled.input`
  flex: 1;
  flex-shrink: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'whitesmoke'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  padding: 15px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;

  ::placeholder {
    color: ${props => props.darkMode ? '#888' : '#999'};
  }
`;

const EndOfMessage = styled.div`
  margin-bottom: 50px;
`;

const OfflineMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: ${props => props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${props => props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${props => props.darkMode ? '#721c24' : '#f5c6cb'};
  border-radius: 4px;
  margin: 20px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: ${props => props.darkMode ? '#ffeeba' : '#856404'};
  background-color: ${props => props.darkMode ? '#664d03' : '#fff3cd'};
  border: 1px solid ${props => props.darkMode ? '#856404' : '#ffeeba'};
  border-radius: 4px;
  margin: 20px;
`;

const ErrorAlert = styled.div`
  color: ${props => props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${props => props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${props => props.darkMode ? '#721c24' : '#f5c6cb'};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
`;

const SendButton = styled.button`
  background-color: ${props => props.darkMode ? '#d32f2f' : '#f44336'} !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  font-weight: 600 !important;
  display: block !important;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  opacity: ${props => props.disabled ? '0.5' : '1'} !important;
  
  &:hover {
    background-color: ${props => props.darkMode ? '#b71c1c' : '#d32f2f'} !important;
  }

  &:disabled {
    cursor: not-allowed !important;
  }
`;

const FilePreview = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const FileInfo = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : '#f5f5f5'};
  border-radius: 8px;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  p {
    margin: 5px 0;
  }
`;

const FileInput = styled.input`
  width: 100%;
  outline: 0;
  border: 1px solid ${props => props.darkMode ? '#444' : '#ddd'};
  border-radius: 8px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : 'white'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  padding: 12px;
  font-size: 16px;
  margin-bottom: 10px;

  ::placeholder {
    color: ${props => props.darkMode ? '#888' : '#999'};
  }
`;

const UploadProgress = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    margin-top: 10px;
    font-weight: bold;
  }
`;

const ProfileContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ProfileInfo = styled.div`
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  h2 {
    margin-bottom: 15px;
    color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  }

  p {
    margin: 10px 0;
    font-size: 16px;
    color: ${props => props.darkMode ? '#aaa' : 'gray'};
  }
`;

const RecordingIndicator = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: ${props => props.darkMode ? '#1e1e1e' : '#ffebee'};
  border-radius: 10px;
  color: ${props => props.darkMode ? '#e0e0e0' : '#c62828'};
  font-weight: 500;
`;

const RecordingDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #f44336;
  border-radius: 50%;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
`;

const VoicePreview = styled.div`
  padding: 20px;
  text-align: center;
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const EmojiPickerContainer = styled.div`
  width: 350px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.darkMode ? '#2a2a2a' : 'white'};
`;

const EmojiPickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${props => props.darkMode ? '#444' : '#e0e0e0'};

  h3 {
    margin: 0;
    font-size: 18px;
    color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  }
`;

const EmojiSearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  border-bottom: 1px solid ${props => props.darkMode ? '#444' : '#e0e0e0'};
`;

const EmojiSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: ${props => props.darkMode ? '#1e1e1e' : '#f5f5f5'};
  color: ${props => props.darkMode ? '#e0e0e0' : 'black'};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;

  ::placeholder {
    color: ${props => props.darkMode ? '#888' : '#999'};
  }
`;

const EmojiCategoryTabs = styled(Tabs)`
  border-bottom: 1px solid ${props => props.darkMode ? '#444' : '#e0e0e0'};
  min-height: 48px;

  .MuiTabs-flexContainer {
    justify-content: space-around;
  }
`;

const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 4px;
  padding: 12px;
  overflow-y: auto;
  max-height: 280px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.darkMode ? '#1e1e1e' : '#f1f1f1'};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.darkMode ? '#555' : '#888'};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.darkMode ? '#666' : '#555'};
  }
`;

const EmojiButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.darkMode ? '#3a3a3a' : '#f0f0f0'};
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.1);
  }
`;

const NoEmojisMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px 20px;
  color: ${props => props.darkMode ? '#888' : '#999'};
  font-size: 14px;
`;