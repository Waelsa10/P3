module.exports = [
"[project]/components/ChatScreen/constants.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/constants.js
__turbopack_context__.s([
    "EMOJIS",
    ()=>EMOJIS,
    "EMOJI_CATEGORIES",
    ()=>EMOJI_CATEGORIES,
    "MESSAGE_STATUS",
    ()=>MESSAGE_STATUS
]);
const EMOJI_CATEGORIES = {
    recent: {
        name: "Recent",
        icon: "🕒"
    },
    smileys: {
        name: "Smileys & People",
        icon: "😀"
    },
    animals: {
        name: "Animals & Nature",
        icon: "🐶"
    },
    food: {
        name: "Food & Drink",
        icon: "🍔"
    },
    activities: {
        name: "Activities",
        icon: "⚽"
    },
    travel: {
        name: "Travel & Places",
        icon: "✈️"
    },
    objects: {
        name: "Objects",
        icon: "💡"
    },
    symbols: {
        name: "Symbols",
        icon: "❤️"
    },
    flags: {
        name: "Flags",
        icon: "🏁"
    }
};
const EMOJIS = {
    smileys: [
        "😀",
        "😃",
        "😄",
        "😁",
        "😆",
        "😅",
        "🤣",
        "😂",
        "🙂",
        "🙃",
        "😉",
        "😊",
        "😇",
        "🥰",
        "😍",
        "🤩",
        "😘",
        "😗",
        "😚",
        "😙",
        "🥲",
        "😋",
        "😛",
        "😜",
        "🤪",
        "😝",
        "🤑",
        "🤗",
        "🤭",
        "🤫",
        "🤔",
        "🤐",
        "🤨",
        "😐",
        "😑",
        "😶",
        "😏",
        "😒",
        "🙄",
        "😬",
        "🤥",
        "😌",
        "😔",
        "😪",
        "🤤",
        "😴",
        "😷",
        "🤒",
        "🤕",
        "🤢",
        "🤮",
        "🤧",
        "🥵",
        "🥶",
        "🥴",
        "😵",
        "🤯",
        "🤠",
        "🥳",
        "🥸",
        "😎",
        "🤓",
        "🧐",
        "😕",
        "😟",
        "🙁",
        "☹️",
        "😮",
        "😯",
        "😲",
        "😳",
        "🥺",
        "😦",
        "😧",
        "😨",
        "😰",
        "😥",
        "😢",
        "😭",
        "😱",
        "😖",
        "😣",
        "😞",
        "😓",
        "😩",
        "😫",
        "🥱",
        "😤",
        "😡",
        "😠",
        "🤬",
        "😈",
        "👿",
        "💀",
        "☠️",
        "💩",
        "🤡",
        "👹",
        "👺",
        "👻",
        "👽",
        "👾",
        "🤖",
        "😺",
        "😸",
        "😹",
        "😻",
        "😼",
        "😽",
        "🙀",
        "😿",
        "😾",
        "👋",
        "🤚",
        "🖐️",
        "✋",
        "🖖",
        "👌",
        "🤌",
        "🤏",
        "✌️",
        "🤞",
        "🤟",
        "🤘",
        "🤙",
        "👈",
        "👉",
        "👆",
        "🖕",
        "👇",
        "☝️",
        "👍",
        "👎",
        "✊",
        "👊",
        "🤛",
        "🤜",
        "👏",
        "🙌",
        "👐",
        "🤲",
        "🤝",
        "🙏",
        "✍️",
        "💅",
        "🤳",
        "💪",
        "🦾",
        "🦿",
        "🦵",
        "🦶",
        "👂",
        "🦻",
        "👃",
        "🧠",
        "🫀",
        "🫁",
        "🦷",
        "🦴",
        "👀",
        "👁️",
        "👅",
        "👄",
        "💋",
        "🩸"
    ],
    animals: [
        "🐶",
        "🐱",
        "🐭",
        "🐹",
        "🐰",
        "🦊",
        "🐻",
        "🐼",
        "🐨",
        "🐯",
        "🦁",
        "🐮",
        "🐷",
        "🐽",
        "🐸",
        "🐵",
        "🙈",
        "🙉",
        "🙊",
        "🐒",
        "🐔",
        "🐧",
        "🐦",
        "🐤",
        "🐣",
        "🐥",
        "🦆",
        "🦅",
        "🦉",
        "🦇",
        "🐺",
        "🐗",
        "🐴",
        "🦄",
        "🐝",
        "🪱",
        "🐛",
        "🦋",
        "🐌",
        "🐞",
        "🐜",
        "🪰",
        "🪲",
        "🪳",
        "🦟",
        "🦗",
        "🕷️",
        "🕸️",
        "🦂",
        "🐢",
        "🐍",
        "🦎",
        "🦖",
        "🦕",
        "🐙",
        "🦑",
        "🦐",
        "🦞",
        "🦀",
        "🐡",
        "🐠",
        "🐟",
        "🐬",
        "🐳",
        "🐋",
        "🦈",
        "🐊",
        "🐅",
        "🐆",
        "🦓",
        "🦍",
        "🦧",
        "🦣",
        "🐘",
        "🦛",
        "🦏",
        "🐪",
        "🐫",
        "🦒",
        "🦘",
        "🦬",
        "🐃",
        "🐂",
        "🐄",
        "🐎",
        "🐖",
        "🐏",
        "🐑",
        "🦙",
        "🐐",
        "🦌",
        "🐕",
        "🐩",
        "🦮",
        "🐕‍🦺",
        "🐈",
        "🐈‍⬛",
        "🪶",
        "🐓",
        "🦃",
        "🦤",
        "🦚",
        "🦜",
        "🦢",
        "🦩",
        "🕊️",
        "🐇",
        "🦝",
        "🦨",
        "🦡",
        "🦫",
        "🦦",
        "🦥",
        "🐁",
        "🐀",
        "🐿️",
        "🦔",
        "🌲",
        "🌳",
        "🌴",
        "🌱",
        "🌿",
        "☘️",
        "🍀",
        "🎍",
        "🪴",
        "🎋",
        "🍃",
        "🍂",
        "🍁",
        "🍄",
        "🐚",
        "🪨",
        "🌾",
        "💐",
        "🌷",
        "🌹",
        "🥀",
        "🌺",
        "🌸",
        "🌼",
        "🌻",
        "🌞",
        "🌝",
        "🌛",
        "🌜",
        "🌚",
        "🌕",
        "🌖",
        "🌗",
        "🌘",
        "🌑",
        "🌒",
        "🌓",
        "🌔",
        "🌙",
        "🌎",
        "🌍",
        "🌏",
        "🪐",
        "💫",
        "⭐",
        "🌟",
        "✨",
        "⚡",
        "☄️",
        "💥",
        "🔥",
        "🌪️",
        "🌈",
        "☀️",
        "🌤️",
        "⛅",
        "🌥️",
        "☁️",
        "🌦️",
        "🌧️",
        "⛈️",
        "🌩️",
        "🌨️",
        "❄️",
        "☃️",
        "⛄",
        "🌬️",
        "💨",
        "💧",
        "💦",
        "☔",
        "☂️",
        "🌊",
        "🌫️"
    ],
    food: [
        "🍏",
        "🍎",
        "🍐",
        "🍊",
        "🍋",
        "🍌",
        "🍉",
        "🍇",
        "🍓",
        "🫐",
        "🍈",
        "🍒",
        "🍑",
        "🥭",
        "🍍",
        "🥥",
        "🥝",
        "🍅",
        "🍆",
        "🥑",
        "🥦",
        "🥬",
        "🥒",
        "🌶️",
        "🫑",
        "🌽",
        "🥕",
        "🫒",
        "🧄",
        "🧅",
        "🥔",
        "🍠",
        "🥐",
        "🥯",
        "🍞",
        "🥖",
        "🥨",
        "🧀",
        "🥚",
        "🍳",
        "🧈",
        "🥞",
        "🧇",
        "🥓",
        "🥩",
        "🍗",
        "🍖",
        "🦴",
        "🌭",
        "🍔",
        "🍟",
        "🍕",
        "🫓",
        "🥪",
        "🥙",
        "🧆",
        "🌮",
        "🌯",
        "🫔",
        "🥗",
        "🥘",
        "🫕",
        "🥫",
        "🍝",
        "🍜",
        "🍲",
        "🍛",
        "🍣",
        "🍱",
        "🥟",
        "🦪",
        "🍤",
        "🍙",
        "🍚",
        "🍘",
        "🍥",
        "🥠",
        "🥮",
        "🍢",
        "🍡",
        "🍧",
        "🍨",
        "🍦",
        "🥧",
        "🧁",
        "🍰",
        "🎂",
        "🍮",
        "🍭",
        "🍬",
        "🍫",
        "🍿",
        "🍩",
        "🍪",
        "🌰",
        "🥜",
        "🍯",
        "🥛",
        "🍼",
        "🫖",
        "☕",
        "🍵",
        "🧃",
        "🥤",
        "🧋",
        "🍶",
        "🍺",
        "🍻",
        "🥂",
        "🍷",
        "🥃",
        "🍸",
        "🍹",
        "🧉",
        "🍾",
        "🧊",
        "🥄",
        "🍴",
        "🍽️",
        "🥣",
        "🥡",
        "🥢",
        "🧂"
    ],
    activities: [
        "⚽",
        "🏀",
        "🏈",
        "⚾",
        "🥎",
        "🎾",
        "🏐",
        "🏉",
        "🥏",
        "🎱",
        "🪀",
        "🏓",
        "🏸",
        "🏒",
        "🏑",
        "🥍",
        "🏏",
        "🪃",
        "🥅",
        "⛳",
        "🪁",
        "🏹",
        "🎣",
        "🤿",
        "🥊",
        "🥋",
        "🎽",
        "🛹",
        "🛼",
        "🛷",
        "⛸️",
        "🥌",
        "🎿",
        "⛷️",
        "🏂",
        "🪂",
        "🏋️",
        "🤼",
        "🤸",
        "🤺",
        "⛹️",
        "🤾",
        "🏌️",
        "🏇",
        "🧘",
        "🏄",
        "🏊",
        "🤽",
        "🚣",
        "🧗",
        "🚵",
        "🚴",
        "🏆",
        "🥇",
        "🥈",
        "🥉",
        "🏅",
        "🎖️",
        "🏵️",
        "🎗️",
        "🎫",
        "🎟️",
        "🎪",
        "🤹",
        "🎭",
        "🩰",
        "🎨",
        "🎬",
        "🎤",
        "🎧",
        "🎼",
        "🎹",
        "🥁",
        "🪘",
        "🎷",
        "🎺",
        "🪗",
        "🎸",
        "🪕",
        "🎻",
        "🎲",
        "♟️",
        "🎯",
        "🎳",
        "🎮",
        "🎰",
        "🧩"
    ],
    travel: [
        "🚗",
        "🚕",
        "🚙",
        "🚌",
        "🚎",
        "🏎️",
        "🚓",
        "🚑",
        "🚒",
        "🚐",
        "🛻",
        "🚚",
        "🚛",
        "🚜",
        "🦯",
        "🦽",
        "🦼",
        "🛴",
        "🚲",
        "🛵",
        "🏍️",
        "🛺",
        "🚨",
        "🚔",
        "🚍",
        "🚘",
        "🚖",
        "🚡",
        "🚠",
        "🚟",
        "🚃",
        "🚋",
        "🚞",
        "🚝",
        "🚄",
        "🚅",
        "🚈",
        "🚂",
        "🚆",
        "🚇",
        "🚊",
        "🚉",
        "✈️",
        "🛫",
        "🛬",
        "🛩️",
        "💺",
        "🛰️",
        "🚀",
        "🛸",
        "🚁",
        "🛶",
        "⛵",
        "🚤",
        "🛥️",
        "🛳️",
        "⛴️",
        "🚢",
        "⚓",
        "🪝",
        "⛽",
        "🚧",
        "🚦",
        "🚥",
        "🚏",
        "🗺️",
        "🗿",
        "🗽",
        "🗼",
        "🏰",
        "🏯",
        "🏟️",
        "🎡",
        "🎢",
        "🎠",
        "⛲",
        "⛱️",
        "🏖️",
        "🏝️",
        "🏜️",
        "🌋",
        "⛰️",
        "🏔️",
        "🗻",
        "🏕️",
        "⛺",
        "🛖",
        "🏠",
        "🏡",
        "🏘️",
        "🏚️",
        "🏗️",
        "🏭",
        "🏢",
        "🏬",
        "🏣",
        "🏤",
        "🏥",
        "🏦",
        "🏨",
        "🏪",
        "🏫",
        "🏩",
        "💒",
        "🏛️",
        "⛪",
        "🕌",
        "🕍",
        "🛕",
        "🕋",
        "⛩️",
        "🛤️",
        "🛣️",
        "🗾",
        "🎑",
        "🏞️",
        "🌅",
        "🌄",
        "🌠",
        "🎇",
        "🎆",
        "🌇",
        "🌆",
        "🏙️",
        "🌃",
        "🌌",
        "🌉",
        "🌁"
    ],
    objects: [
        "⌚",
        "📱",
        "📲",
        "💻",
        "⌨️",
        "🖥️",
        "🖨️",
        "🖱️",
        "🖲️",
        "🕹️",
        "🗜️",
        "💽",
        "💾",
        "💿",
        "📀",
        "📼",
        "📷",
        "📸",
        "📹",
        "🎥",
        "📽️",
        "🎞️",
        "📞",
        "☎️",
        "📟",
        "📠",
        "📺",
        "📻",
        "🎙️",
        "🎚️",
        "🎛️",
        "🧭",
        "⏱️",
        "⏲️",
        "⏰",
        "🕰️",
        "⌛",
        "⏳",
        "📡",
        "🔋",
        "🔌",
        "💡",
        "🔦",
        "🕯️",
        "🪔",
        "🧯",
        "🛢️",
        "💸",
        "💵",
        "💴",
        "💶",
        "💷",
        "🪙",
        "💰",
        "💳",
        "💎",
        "⚖️",
        "🪜",
        "🧰",
        "🪛",
        "🔧",
        "🔨",
        "⚒️",
        "🛠️",
        "⛏️",
        "🪚",
        "🔩",
        "⚙️",
        "🪤",
        "🧱",
        "⛓️",
        "🧲",
        "🔫",
        "💣",
        "🧨",
        "🪓",
        "🔪",
        "🗡️",
        "⚔️",
        "🛡️",
        "🚬",
        "⚰️",
        "🪦",
        "⚱️",
        "🏺",
        "🔮",
        "📿",
        "🧿",
        "💈",
        "⚗️",
        "🔭",
        "🔬",
        "🕳️",
        "🩹",
        "🩺",
        "💊",
        "💉",
        "🩸",
        "🧬",
        "🦠",
        "🧫",
        "🧪",
        "🌡️",
        "🧹",
        "🪠",
        "🧺",
        "🧻",
        "🚽",
        "🚰",
        "🚿",
        "🛁",
        "🛀",
        "🧼",
        "🪥",
        "🪒",
        "🧽",
        "🪣",
        "🧴",
        "🛎️",
        "🔑",
        "🗝️",
        "🚪",
        "🪑",
        "🛋️",
        "🛏️",
        "🛌",
        "🧸",
        "🪆",
        "🖼️",
        "🪞",
        "🪟",
        "🛍️",
        "🛒",
        "🎁",
        "🎈",
        "🎏",
        "🎀",
        "🪄",
        "🪅",
        "🎊",
        "🎉",
        "🎎",
        "🏮",
        "🎐",
        "🧧",
        "✉️",
        "📩",
        "📨",
        "📧",
        "💌",
        "📥",
        "📤",
        "📦",
        "🏷️",
        "🪧",
        "📪",
        "📫",
        "📬",
        "📭",
        "📮",
        "📯",
        "📜",
        "📃",
        "📄",
        "📑",
        "🧾",
        "📊",
        "📈",
        "📉",
        "🗒️",
        "🗓️",
        "📆",
        "📅",
        "🗑️",
        "📇",
        "🗃️",
        "🗳️",
        "🗄️",
        "📋",
        "📁",
        "📂",
        "🗂️",
        "🗞️",
        "📰",
        "📓",
        "📔",
        "📒",
        "📕",
        "📗",
        "📘",
        "📙",
        "📚",
        "📖",
        "🔖",
        "🧷",
        "🔗",
        "📎",
        "🖇️",
        "📐",
        "📏",
        "🧮",
        "📌",
        "📍",
        "✂️",
        "🖊️",
        "🖋️",
        "✒️",
        "🖌️",
        "🖍️",
        "📝",
        "✏️",
        "🔍",
        "🔎",
        "🔏",
        "🔐",
        "🔒",
        "🔓"
    ],
    symbols: [
        "❤️",
        "🧡",
        "💛",
        "💚",
        "💙",
        "💜",
        "🖤",
        "🤍",
        "🤎",
        "💔",
        "❣️",
        "💕",
        "💞",
        "💓",
        "💗",
        "💖",
        "💘",
        "💝",
        "💟",
        "☮️",
        "✝️",
        "☪️",
        "🕉️",
        "☸️",
        "✡️",
        "🔯",
        "🕎",
        "☯️",
        "☦️",
        "🛐",
        "⛎",
        "♈",
        "♉",
        "♊",
        "♋",
        "♌",
        "♍",
        "♎",
        "♏",
        "♐",
        "♑",
        "♒",
        "♓",
        "🆔",
        "⚛️",
        "🉑",
        "☢️",
        "☣️",
        "📴",
        "📳",
        "🈶",
        "🈚",
        "🈸",
        "🈺",
        "🈷️",
        "✴️",
        "🆚",
        "💮",
        "🉐",
        "㊙️",
        "㊗️",
        "🈴",
        "🈵",
        "🈹",
        "🈲",
        "🅰️",
        "🅱️",
        "🆎",
        "🆑",
        "🅾️",
        "🆘",
        "❌",
        "⭕",
        "🛑",
        "⛔",
        "📛",
        "🚫",
        "💯",
        "💢",
        "♨️",
        "🚷",
        "🚯",
        "🚳",
        "🚱",
        "🔞",
        "📵",
        "🚭",
        "❗",
        "❕",
        "❓",
        "❔",
        "‼️",
        "⁉️",
        "🔅",
        "🔆",
        "〽️",
        "⚠️",
        "🚸",
        "🔱",
        "⚜️",
        "🔰",
        "♻️",
        "✅",
        "🈯",
        "💹",
        "❇️",
        "✳️",
        "❎",
        "🌐",
        "💠",
        "Ⓜ️",
        "🌀",
        "💤",
        "🏧",
        "🚾",
        "♿",
        "🅿️",
        "🛗",
        "🈳",
        "🈂️",
        "🛂",
        "🛃",
        "🛄",
        "🛅",
        "🚹",
        "🚺",
        "🚼",
        "⚧️",
        "🚻",
        "🚮",
        "🎦",
        "📶",
        "🈁",
        "🔣",
        "ℹ️",
        "🔤",
        "🔡",
        "🔠",
        "🆖",
        "🆗",
        "🆙",
        "🆒",
        "🆕",
        "🆓",
        "0️⃣",
        "1️⃣",
        "2️⃣",
        "3️⃣",
        "4️⃣",
        "5️⃣",
        "6️⃣",
        "7️⃣",
        "8️⃣",
        "9️⃣",
        "🔟",
        "🔢",
        "#️⃣",
        "*️⃣",
        "⏏️",
        "▶️",
        "⏸️",
        "⏯️",
        "⏹️",
        "⏺️",
        "⏭️",
        "⏮️",
        "⏩",
        "⏪",
        "⏫",
        "⏬",
        "◀️",
        "🔼",
        "🔽",
        "➡️",
        "⬅️",
        "⬆️",
        "⬇️",
        "↗️",
        "↘️",
        "↙️",
        "↖️",
        "↕️",
        "↔️",
        "↪️",
        "↩️",
        "⤴️",
        "⤵️",
        "🔀",
        "🔁",
        "🔂",
        "🔄",
        "🔃",
        "🎵",
        "🎶",
        "➕",
        "➖",
        "➗",
        "✖️",
        "🟰",
        "♾️",
        "💲",
        "💱",
        "™️",
        "©️",
        "®️",
        "〰️",
        "➰",
        "➿",
        "🔚",
        "🔙",
        "🔛",
        "🔝",
        "🔜",
        "✔️",
        "☑️",
        "🔘",
        "🔴",
        "🟠",
        "🟡",
        "🟢",
        "🔵",
        "🟣",
        "⚫",
        "⚪",
        "🟤",
        "🔺",
        "🔻",
        "🔸",
        "🔹",
        "🔶",
        "🔷",
        "🔳",
        "🔲",
        "▪️",
        "▫️",
        "◾",
        "◽",
        "◼️",
        "◻️",
        "🟥",
        "🟧",
        "🟨",
        "🟩",
        "🟦",
        "🟪",
        "⬛",
        "⬜",
        "🟫",
        "🔈",
        "🔇",
        "🔉",
        "🔊",
        "🔔",
        "🔕",
        "📣",
        "📢",
        "👁️‍🗨️",
        "💬",
        "💭",
        "🗯️",
        "♠️",
        "♣️",
        "♥️",
        "♦️",
        "🃏",
        "🎴",
        "🀄",
        "🕐",
        "🕑",
        "🕒",
        "🕓",
        "🕔",
        "🕕",
        "🕖",
        "🕗",
        "🕘",
        "🕙",
        "🕚",
        "🕛",
        "🕜",
        "🕝",
        "🕞",
        "🕟",
        "🕠",
        "🕡",
        "🕢",
        "🕣",
        "🕤",
        "🕥",
        "🕦",
        "🕧"
    ],
    flags: [
        "🏳️",
        "🏴",
        "🏁",
        "🚩",
        "🏳️‍🌈",
        "🏳️‍⚧️",
        "🏴‍☠️",
        "🇦🇫",
        "🇦🇽",
        "🇦🇱",
        "🇩🇿",
        "🇦🇸",
        "🇦🇩",
        "🇦🇴",
        "🇦🇮",
        "🇦🇶",
        "🇦🇬",
        "🇦🇷",
        "🇦🇲",
        "🇦🇼",
        "🇦🇺",
        "🇦🇹",
        "🇦🇿",
        "🇧🇸",
        "🇧🇭",
        "🇧🇩",
        "🇧🇧",
        "🇧🇾",
        "🇧🇪",
        "🇧🇿",
        "🇧🇯",
        "🇧🇲",
        "🇧🇹",
        "🇧🇴",
        "🇧🇦",
        "🇧🇼",
        "🇧🇷",
        "🇮🇴",
        "🇻🇬",
        "🇧🇳",
        "🇧🇬",
        "🇧🇫",
        "🇧🇮",
        "🇰🇭",
        "🇨🇲",
        "🇨🇦",
        "🇮🇨",
        "🇨🇻",
        "🇧🇶",
        "🇰🇾",
        "🇨🇫",
        "🇹🇩",
        "🇨🇱",
        "🇨🇳",
        "🇨🇽",
        "🇨🇨",
        "🇨🇴",
        "🇰🇲",
        "🇨🇬",
        "🇨🇩",
        "🇨🇰",
        "🇨🇷",
        "🇨🇮",
        "🇭🇷",
        "🇨🇺",
        "🇨🇼",
        "🇨🇾",
        "🇨🇿",
        "🇩🇰",
        "🇩🇯",
        "🇩🇲",
        "🇩🇴",
        "🇪🇨",
        "🇪🇬",
        "🇸🇻",
        "🇬🇶",
        "🇪🇷",
        "🇪🇪",
        "🇸🇿",
        "🇪🇹",
        "🇪🇺",
        "🇫🇰",
        "🇫🇴",
        "🇫🇯",
        "🇫🇮",
        "🇫🇷",
        "🇬🇫",
        "🇵🇫",
        "🇹🇫",
        "🇬🇦",
        "🇬🇲",
        "🇬🇪",
        "🇩🇪",
        "🇬🇭",
        "🇬🇮",
        "🇬🇷",
        "🇬🇱",
        "🇬🇩",
        "🇬🇵",
        "🇬🇺",
        "🇬🇹",
        "🇬🇬",
        "🇬🇳",
        "🇬🇼",
        "🇬🇾",
        "🇭🇹",
        "🇭🇳",
        "🇭🇰",
        "🇭🇺",
        "🇮🇸",
        "🇮🇳",
        "🇮🇩",
        "🇮🇷",
        "🇮🇶",
        "🇮🇪",
        "🇮🇲",
        "🇮🇱",
        "🇮🇹",
        "🇯🇲",
        "🇯🇵",
        "🎌",
        "🇯🇪",
        "🇯🇴",
        "🇰🇿",
        "🇰🇪",
        "🇰🇮",
        "🇽🇰",
        "🇰🇼",
        "🇰🇬",
        "🇱🇦",
        "🇱🇻",
        "🇱🇧",
        "🇱🇸",
        "🇱🇷",
        "🇱🇾",
        "🇱🇮",
        "🇱🇹",
        "🇱🇺",
        "🇲🇴",
        "🇲🇬",
        "🇲🇼",
        "🇲🇾",
        "🇲🇻",
        "🇲🇱",
        "🇲🇹",
        "🇲🇭",
        "🇲🇶",
        "🇲🇷",
        "🇲🇺",
        "🇾🇹",
        "🇲🇽",
        "🇫🇲",
        "🇲🇩",
        "🇲🇨",
        "🇲🇳",
        "🇲🇪",
        "🇲🇸",
        "🇲🇦",
        "🇲🇿",
        "🇲🇲",
        "🇳🇦",
        "🇳🇷",
        "🇳🇵",
        "🇳🇱",
        "🇳🇨",
        "🇳🇿",
        "🇳🇮",
        "🇳🇪",
        "🇳🇬",
        "🇳🇺",
        "🇳🇫",
        "🇰🇵",
        "🇲🇰",
        "🇲🇵",
        "🇳🇴",
        "🇴🇲",
        "🇵🇰",
        "🇵🇼",
        "🇵🇸",
        "🇵🇦",
        "🇵🇬",
        "🇵🇾",
        "🇵🇪",
        "🇵🇭",
        "🇵🇳",
        "🇵🇱",
        "🇵🇹",
        "🇵🇷",
        "🇶🇦",
        "🇷🇪",
        "🇷🇴",
        "🇷🇺",
        "🇷🇼",
        "🇼🇸",
        "🇸🇲",
        "🇸🇹",
        "🇸🇦",
        "🇸🇳",
        "🇷🇸",
        "🇸🇨",
        "🇸🇱",
        "🇸🇬",
        "🇸🇽",
        "🇸🇰",
        "🇸🇮",
        "🇬🇸",
        "🇸🇧",
        "🇸🇴",
        "🇿🇦",
        "🇰🇷",
        "🇸🇸",
        "🇪🇸",
        "🇱🇰",
        "🇧🇱",
        "🇸🇭",
        "🇰🇳",
        "🇱🇨",
        "🇵🇲",
        "🇻🇨",
        "🇸🇩",
        "🇸🇷",
        "🇸🇪",
        "🇨🇭",
        "🇸🇾",
        "🇹🇼",
        "🇹🇯",
        "🇹🇿",
        "🇹🇭",
        "🇹🇱",
        "🇹🇬",
        "🇹🇰",
        "🇹🇴",
        "🇹🇹",
        "🇹🇳",
        "🇹🇷",
        "🇹🇲",
        "🇹🇨",
        "🇹🇻",
        "🇻🇮",
        "🇺🇬",
        "🇺🇦",
        "🇦🇪",
        "🇬🇧",
        "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "🇺🇸",
        "🇺🇾",
        "🇺🇿",
        "🇻🇺",
        "🇻🇦",
        "🇻🇪",
        "🇻🇳",
        "🇼🇫",
        "🇪🇭",
        "🇾🇪",
        "🇿🇲",
        "🇿🇼"
    ]
};
const MESSAGE_STATUS = {
    SENT: 'sent',
    DELIVERED: 'delivered',
    READ: 'read' // Two blue checkmarks
};
}),
"[project]/components/ChatScreen/hooks/useEmojiPicker.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/hooks/useEmojiPicker.js
__turbopack_context__.s([
    "useEmojiPicker",
    ()=>useEmojiPicker
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
;
;
const useEmojiPicker = ()=>{
    const [emojiAnchorEl, setEmojiAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedEmojiCategory, setSelectedEmojiCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("recent");
    const [recentEmojis, setRecentEmojis] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [emojiSearchTerm, setEmojiSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    // Load recent emojis from localStorage
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem("recentEmojis");
        if (stored) {
            setRecentEmojis(JSON.parse(stored));
        }
    }, []);
    const saveRecentEmoji = (emoji)=>{
        const updated = [
            emoji,
            ...recentEmojis.filter((e)=>e !== emoji)
        ].slice(0, 30);
        setRecentEmojis(updated);
        localStorage.setItem("recentEmojis", JSON.stringify(updated));
    };
    const handleEmojiPickerOpen = (event)=>{
        setEmojiAnchorEl(event.currentTarget);
    };
    const handleEmojiPickerClose = ()=>{
        setEmojiAnchorEl(null);
        setEmojiSearchTerm("");
    };
    const getFilteredEmojis = ()=>{
        if (selectedEmojiCategory === "recent") {
            return recentEmojis;
        }
        const categoryEmojis = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EMOJIS"][selectedEmojiCategory] || [];
        return categoryEmojis;
    };
    return {
        emojiAnchorEl,
        selectedEmojiCategory,
        setSelectedEmojiCategory,
        emojiSearchTerm,
        setEmojiSearchTerm,
        recentEmojis,
        handleEmojiPickerOpen,
        handleEmojiPickerClose,
        saveRecentEmoji,
        getFilteredEmojis,
        openEmojiPicker: Boolean(emojiAnchorEl)
    };
};
}),
"[project]/lib/cloudinary.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/cloudinary.js
__turbopack_context__.s([
    "testCloudinaryConfig",
    ()=>testCloudinaryConfig,
    "uploadToCloudinary",
    ()=>uploadToCloudinary
]);
const CLOUDINARY_CLOUD_NAME = ("TURBOPACK compile-time value", "dlmdxpf0j");
const CLOUDINARY_UPLOAD_PRESET = ("TURBOPACK compile-time value", "chat_uploads");
// Validate environment variables
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
const uploadToCloudinary = async (file, onProgress = null)=>{
    return new Promise((resolve, reject)=>{
        // Validation
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!file) {
            reject(new Error('No file provided'));
            return;
        }
        console.log('🔄 Starting Cloudinary upload...');
        console.log('📦 File size:', file.size, 'bytes');
        console.log('📦 File type:', file.type);
        console.log('☁️ Cloud name:', CLOUDINARY_CLOUD_NAME);
        console.log('🔑 Upload preset:', CLOUDINARY_UPLOAD_PRESET);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', 'chat-app');
        const xhr = new XMLHttpRequest();
        // Track upload progress
        if (onProgress) {
            xhr.upload.addEventListener('progress', (e)=>{
                if (e.lengthComputable) {
                    const percentComplete = e.loaded / e.total * 100;
                    console.log(`📤 Upload progress: ${Math.round(percentComplete)}%`);
                    onProgress(percentComplete);
                }
            });
        }
        xhr.addEventListener('load', ()=>{
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    console.log('✅ Upload successful!');
                    console.log('🔗 URL:', response.secure_url);
                    resolve(response.secure_url);
                } catch (parseError) {
                    console.error('❌ Failed to parse response:', parseError);
                    reject(new Error('Failed to parse Cloudinary response'));
                }
            } else {
                console.error('❌ Upload failed with status:', xhr.status);
                console.error('📄 Response:', xhr.responseText);
                let errorMessage = `Upload failed (${xhr.status})`;
                try {
                    const errorResponse = JSON.parse(xhr.responseText);
                    errorMessage = errorResponse.error?.message || errorMessage;
                } catch (e) {
                // Ignore parsing error
                }
                reject(new Error(errorMessage));
            }
        });
        xhr.addEventListener('error', ()=>{
            console.error('❌ Network error during upload');
            reject(new Error('Network error during upload'));
        });
        xhr.addEventListener('abort', ()=>{
            console.log('⚠️ Upload cancelled');
            reject(new Error('Upload cancelled'));
        });
        console.log('🚀 Sending request to:', CLOUDINARY_URL);
        xhr.open('POST', CLOUDINARY_URL);
        xhr.send(formData);
    });
};
const testCloudinaryConfig = ()=>{
    console.log('🧪 Testing Cloudinary Configuration:');
    console.log('Cloud Name:', CLOUDINARY_CLOUD_NAME || '❌ NOT SET');
    console.log('Upload Preset:', CLOUDINARY_UPLOAD_PRESET || '❌ NOT SET');
    console.log('URL:', CLOUDINARY_URL);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    console.log('✅ Cloudinary configuration looks good!');
    return true;
};
}),
"[project]/components/ChatScreen/utils.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildReplyData",
    ()=>buildReplyData,
    "checkIfBlocked",
    ()=>checkIfBlocked,
    "formatFileSize",
    ()=>formatFileSize,
    "formatTime",
    ()=>formatTime,
    "getFileIcon",
    ()=>getFileIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const checkIfBlocked = async (currentUserEmail, recipientEmail)=>{
    try {
        // Don't check blocking for self-chat
        if (currentUserEmail === recipientEmail) {
            return false;
        }
        // Check if current user is blocked by recipient
        const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        if (!querySnapshot.empty) {
            const recipientData = querySnapshot.docs[0].data();
            const blockedUsers = recipientData.blockedUsers || [];
            if (blockedUsers.includes(currentUserEmail)) {
                return true;
            }
        }
        return false;
    } catch (error) {
        console.error("Error checking if blocked:", error);
        return false;
    }
};
const buildReplyData = (replyingTo)=>{
    if (!replyingTo) return null;
    const replyData = {
        messageId: replyingTo.id,
        user: replyingTo.user,
        message: replyingTo.message
    };
    if (replyingTo.fileURL) {
        replyData.fileURL = replyingTo.fileURL;
        replyData.fileName = replyingTo.fileName;
        replyData.fileType = replyingTo.fileType;
    }
    if (replyingTo.voiceURL) {
        replyData.voiceURL = replyingTo.voiceURL;
        replyData.duration = replyingTo.duration;
    }
    return replyData;
};
const formatFileSize = (bytes)=>{
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
};
const formatTime = (seconds)=>{
    if (!seconds || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
};
const getFileIcon = (fileType)=>{
    if (fileType?.startsWith("image/")) return "🖼️";
    if (fileType?.startsWith("video/")) return "🎥";
    if (fileType?.startsWith("audio/")) return "🎵";
    if (fileType?.includes("pdf")) return "📄";
    if (fileType?.includes("word") || fileType?.includes("document")) return "📝";
    if (fileType?.includes("sheet") || fileType?.includes("excel")) return "📊";
    if (fileType?.includes("zip") || fileType?.includes("rar")) return "📦";
    return "📎";
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useFileUpload.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useFileUpload.js
__turbopack_context__.s([
    "useFileUpload",
    ()=>useFileUpload
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cloudinary.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const useFileUpload = (chatId, user, recipientEmail)=>{
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [filePreview, setFilePreview] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showFileConfirmation, setShowFileConfirmation] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleFileSelect = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Create preview for images
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    setFilePreview(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setFilePreview(null);
            }
            setShowFileConfirmation(true);
        }
    };
    const cancelFileSelection = ()=>{
        setSelectedFile(null);
        setFilePreview(null);
        setShowFileConfirmation(false);
        setUploadProgress(0);
    };
    const sendFileMessage = async (input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom)=>{
        if (!selectedFile || !chatId || !user || !recipientEmail) return;
        setIsUploading(true);
        setSendingError(null);
        try {
            // Check if blocked
            const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
            if (isBlocked) {
                setSendingError("You cannot send messages to this user. You have been blocked.");
                setIsUploading(false);
                return;
            }
            // Upload to Cloudinary with progress tracking
            const fileURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["uploadToCloudinary"])(selectedFile, (progress)=>{
                setUploadProgress(progress);
            });
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: input || "",
                user: user.email,
                photoURL: user.photoURL,
                fileURL: fileURL,
                fileName: selectedFile.name,
                fileType: selectedFile.type,
                fileSize: selectedFile.size,
                status: MESSAGE_STATUS.SENT
            };
            // Add reply data if replying
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            // Reset states
            setInput("");
            setSelectedFile(null);
            setFilePreview(null);
            setShowFileConfirmation(false);
            setUploadProgress(0);
            setReplyingTo(null);
            scrollToBottom();
        } catch (error) {
            console.error("Error sending file:", error);
            setSendingError(`Failed to send file: ${error.message}`);
        } finally{
            setIsUploading(false);
        }
    };
    return {
        selectedFile,
        filePreview,
        showFileConfirmation,
        uploadProgress,
        isUploading,
        handleFileSelect,
        cancelFileSelection,
        sendFileMessage
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useVoiceRecording.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useVoiceRecording.js
__turbopack_context__.s([
    "useVoiceRecording",
    ()=>useVoiceRecording
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cloudinary.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const useVoiceRecording = (chatId, user, recipientEmail)=>{
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [recordingTime, setRecordingTime] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [audioBlob, setAudioBlob] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    // Recording timer
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let interval;
        if (isRecording) {
            interval = setInterval(()=>{
                setRecordingTime((prev)=>prev + 1);
            }, 1000);
        } else {
            setRecordingTime(0);
        }
        return ()=>clearInterval(interval);
    }, [
        isRecording
    ]);
    const startRecording = async (setSendingError)=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
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
            const options = mimeType ? {
                mimeType
            } : {};
            const mediaRecorder = new MediaRecorder(stream, options);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            mediaRecorder.ondataavailable = (event)=>{
                console.log('Data available:', event.data.size, 'bytes');
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            mediaRecorder.onstop = ()=>{
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
                stream.getTracks().forEach((track)=>track.stop());
            };
            mediaRecorder.onerror = (event)=>{
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
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };
    const cancelRecording = ()=>{
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
        setAudioBlob(null);
        setRecordingTime(0);
    };
    const sendVoiceMessage = async (replyingTo, setSendingError, setReplyingTo, scrollToBottom)=>{
        if (!audioBlob || !chatId || !user || !recipientEmail) return;
        setIsUploading(true);
        setSendingError(null);
        try {
            // Check if blocked
            const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
            if (isBlocked) {
                setSendingError("You cannot send messages to this user. You have been blocked.");
                setIsUploading(false);
                return;
            }
            // Upload to Cloudinary with progress tracking
            const voiceURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["uploadToCloudinary"])(audioBlob, (progress)=>{
                setUploadProgress(progress);
            });
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: "🎤 Voice message",
                user: user.email,
                photoURL: user.photoURL,
                voiceURL: voiceURL,
                voiceDuration: recordingTime,
                status: MESSAGE_STATUS.SENT
            };
            // Add reply data if replying
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            setAudioBlob(null);
            setUploadProgress(0);
            setReplyingTo(null);
            scrollToBottom();
        } catch (error) {
            console.error("Error sending voice message:", error);
            setSendingError(`Failed to send voice message: ${error.message}`);
        } finally{
            setIsUploading(false);
        }
    };
    return {
        isRecording,
        recordingTime,
        audioBlob,
        uploadProgress,
        isUploading,
        startRecording,
        stopRecording,
        cancelRecording,
        sendVoiceMessage
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-firebase-hooks/firestore", () => require("react-firebase-hooks/firestore"));

module.exports = mod;
}),
"[project]/components/ChatScreen/hooks/useRecipientData.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useRecipientData",
    ()=>useRecipientData
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const useRecipientData = (user, chat)=>{
    if (!user || !chat) {
        return {
            recipientEmail: null,
            recipient: null,
            recipientSnapshot: null,
            isSelfChat: false
        };
    }
    // Check if this is a self-chat
    const isSelfChat = chat.users.length === 2 && chat.users[0] === chat.users[1];
    // Handle self-chat case - use current user's email
    const recipientEmail = isSelfChat ? user.email : chat.users.find((userEmail)=>userEmail !== user.email) || user.email;
    const recipientQuery = recipientEmail ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail)) : null;
    const [recipientSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(recipientQuery);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    return {
        recipientEmail,
        recipient: recipient || {
            email: recipientEmail,
            photoURL: user.photoURL
        },
        recipientSnapshot,
        isSelfChat
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useMessages.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useMessages.js
__turbopack_context__.s([
    "useMessages",
    ()=>useMessages
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const useMessages = (chatId)=>{
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!chatId) return null;
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
    }, [
        chatId
    ]);
    const messagesQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!messagesRef) return null;
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["orderBy"])("timestamp", "asc"));
    }, [
        messagesRef
    ]);
    const [messagesSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(messagesQuery || null);
    return {
        messagesSnapshot
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/timeago-react [external] (timeago-react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timeago-react", () => require("timeago-react"));

module.exports = mod;
}),
"[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/ChatScreen.styles.js
__turbopack_context__.s([
    "Container",
    ()=>Container,
    "EmojiButton",
    ()=>EmojiButton,
    "EmojiCategoryTabs",
    ()=>EmojiCategoryTabs,
    "EmojiGrid",
    ()=>EmojiGrid,
    "EmojiPickerContainer",
    ()=>EmojiPickerContainer,
    "EmojiPickerHeader",
    ()=>EmojiPickerHeader,
    "EmojiSearchContainer",
    ()=>EmojiSearchContainer,
    "EmojiSearchInput",
    ()=>EmojiSearchInput,
    "EndOfMessage",
    ()=>EndOfMessage,
    "ErrorAlert",
    ()=>ErrorAlert,
    "ErrorMessage",
    ()=>ErrorMessage,
    "FileInfo",
    ()=>FileInfo,
    "FileInput",
    ()=>FileInput,
    "FilePreview",
    ()=>FilePreview,
    "Header",
    ()=>Header,
    "HeaderIcons",
    ()=>HeaderIcons,
    "HeaderInformation",
    ()=>HeaderInformation,
    "Input",
    ()=>Input,
    "InputContainer",
    ()=>InputContainer,
    "MessageContainer",
    ()=>MessageContainer,
    "NoEmojisMessage",
    ()=>NoEmojisMessage,
    "OfflineMessage",
    ()=>OfflineMessage,
    "ProfileContainer",
    ()=>ProfileContainer,
    "ProfileInfo",
    ()=>ProfileInfo,
    "RecordingDot",
    ()=>RecordingDot,
    "RecordingIndicator",
    ()=>RecordingIndicator,
    "ReplyBarIndicator",
    ()=>ReplyBarIndicator,
    "ReplyPreviewBar",
    ()=>ReplyPreviewBar,
    "ReplyPreviewContent",
    ()=>ReplyPreviewContent,
    "ReplyPreviewHeader",
    ()=>ReplyPreviewHeader,
    "ReplyPreviewText",
    ()=>ReplyPreviewText,
    "SendButton",
    ()=>SendButton,
    "UploadProgress",
    ()=>UploadProgress,
    "VoicePreview",
    ()=>VoicePreview
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Tabs/Tabs.js [ssr] (ecmascript) <export default as Tabs>");
;
;
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
`;
const Header = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: sticky;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#333' : 'whitesmoke'};
  flex-shrink: 0;
`;
const HeaderInformation = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-left: 15px;
  flex: 1;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  > h3 {
    margin-bottom: 3px;
    color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  }
  > p {
    font-size: 14px;
    color: ${(props)=>props.darkMode ? '#aaa' : 'gray'};
  }
`;
const HeaderIcons = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div``;
const MessageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 30px;
  background-color: ${(props)=>props.darkMode ? '#0d1117' : '#e5ded8'};
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
const InputContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].form`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
  gap: 10px;
  flex-shrink: 0;
  border-top: 1px solid ${(props)=>props.darkMode ? '#333' : 'whitesmoke'};
`;
const Input = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  flex: 1;
  flex-shrink: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'whitesmoke'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  padding: 15px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;

  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const EndOfMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-bottom: 50px;
`;
const OfflineMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  padding: 20px;
  color: ${(props)=>props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${(props)=>props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${(props)=>props.darkMode ? '#721c24' : '#f5c6cb'};
  border-radius: 4px;
  margin: 20px;
`;
const ErrorMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  padding: 20px;
  color: ${(props)=>props.darkMode ? '#ffeeba' : '#856404'};
  background-color: ${(props)=>props.darkMode ? '#664d03' : '#fff3cd'};
  border: 1px solid ${(props)=>props.darkMode ? '#856404' : '#ffeeba'};
  border-radius: 4px;
  margin: 20px;
`;
const ErrorAlert = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  color: ${(props)=>props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${(props)=>props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${(props)=>props.darkMode ? '#721c24' : '#f5c6cb'};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
`;
const SendButton = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].button`
  background-color: ${(props)=>props.darkMode ? '#d32f2f' : '#f44336'} !important;
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
  opacity: ${(props)=>props.disabled ? '0.5' : '1'} !important;
  
  &:hover {
    background-color: ${(props)=>props.darkMode ? '#b71c1c' : '#d32f2f'} !important;
  }

  &:disabled {
    cursor: not-allowed !important;
  }
`;
const FilePreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  margin-bottom: 20px;
`;
const FileInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : '#f5f5f5'};
  border-radius: 8px;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  p {
    margin: 5px 0;
  }
`;
const FileInput = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  width: 100%;
  outline: 0;
  border: 1px solid ${(props)=>props.darkMode ? '#444' : '#ddd'};
  border-radius: 8px;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  padding: 12px;
  font-size: 16px;
  margin-bottom: 10px;

  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const UploadProgress = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  margin-top: 20px;

  p {
    margin-top: 10px;
    font-weight: bold;
  }
`;
const ProfileContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  padding: 20px;
`;
const ProfileInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  h2 {
    margin-bottom: 15px;
    color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  }

  p {
    margin: 10px 0;
    font-size: 16px;
    color: ${(props)=>props.darkMode ? '#aaa' : 'gray'};
  }
`;
const RecordingIndicator = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : '#ffebee'};
  border-radius: 10px;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : '#c62828'};
  font-weight: 500;
`;
const RecordingDot = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
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
const VoicePreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 20px;
  text-align: center;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
const EmojiPickerContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 350px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
`;
const EmojiPickerHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#444' : '#e0e0e0'};

  h3 {
    margin: 0;
    font-size: 18px;
    color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  }
`;
const EmojiSearchContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#444' : '#e0e0e0'};
`;
const EmojiSearchInput = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  flex: 1;
  border: none;
  outline: none;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : '#f5f5f5'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;

  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const EmojiCategoryTabs = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"])`
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#444' : '#e0e0e0'};
  min-height: 48px;

  .MuiTabs-flexContainer {
    justify-content: space-around;
  }
`;
const EmojiGrid = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
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
    background: ${(props)=>props.darkMode ? '#1e1e1e' : '#f1f1f1'};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props)=>props.darkMode ? '#555' : '#888'};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props)=>props.darkMode ? '#666' : '#555'};
  }
`;
const EmojiButton = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].button`
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
    background-color: ${(props)=>props.darkMode ? '#3a3a3a' : '#f0f0f0'};
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.1);
  }
`;
const NoEmojisMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px 20px;
  color: ${(props)=>props.darkMode ? '#888' : '#999'};
  font-size: 14px;
`;
const ReplyPreviewBar = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  padding: 12px 16px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  border-top: 1px solid ${(props)=>props.darkMode ? '#333' : '#e0e0e0'};
  gap: 12px;
  align-items: center;
`;
const ReplyBarIndicator = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 4px;
  height: 50px;
  background-color: #00a884;
  border-radius: 2px;
  flex-shrink: 0;
`;
const ReplyPreviewContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const ReplyPreviewHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  
  span {
    font-size: 13px;
    font-weight: 600;
    color: #00a884;
  }
`;
const ReplyPreviewText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 14px;
  color: ${(props)=>props.darkMode ? '#aaa' : '#666'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
}),
"[project]/components/ChatScreen/components/ChatHeader.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AttachFile.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/MoreVert.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/timeago-react [external] (timeago-react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
function ChatHeader({ recipient, recipientEmail, recipientSnapshot, isSelfChat, onAttachFile, onMoreClick, darkMode }) {
    const getHeaderTitle = ()=>{
        if (isSelfChat) {
            return `${recipientEmail} (You)`;
        }
        return recipientEmail;
    };
    const getStatusText = ()=>{
        if (isSelfChat) {
            return "Message yourself";
        }
        if (recipient?.lastSeen?.toDate) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    "Last active: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__["default"], {
                        datetime: recipient.lastSeen.toDate()
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 36,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true);
        }
        return "Loading...";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Header"], {
        darkMode: darkMode,
        children: [
            recipient?.photoURL ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                src: recipient.photoURL
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                lineNumber: 47,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                children: recipientEmail?.[0]?.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderInformation"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        children: getHeaderTitle()
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: getStatusText()
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderIcons"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onAttachFile,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onMoreClick,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatHeader;
}),
"[externals]/moment [external] (moment, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("moment", () => require("moment"));

module.exports = mod;
}),
"[project]/components/ChatScreen/components/MessageStatus.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/MessageStatus.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Done$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Done.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/DoneAll.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AccessTime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
const MessageStatus = ({ status, darkMode })=>{
    const getStatusIcon = ()=>{
        switch(status){
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SingleCheck, {
                    darkMode: darkMode
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                    lineNumber: 14,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DoubleCheckGray, {
                    darkMode: darkMode
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                    lineNumber: 17,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DoubleCheckBlue, {}, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                    lineNumber: 20,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PendingIcon, {
                    darkMode: darkMode
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                    lineNumber: 23,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusContainer, {
        children: getStatusIcon()
    }, void 0, false, {
        fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
        lineNumber: 27,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MessageStatus;
// Styled Components
const StatusContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  vertical-align: middle;
`;
const SingleCheck = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Done$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  font-size: 16px !important;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#667781'};
`;
const DoubleCheckGray = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  font-size: 16px !important;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#667781'};
`;
const DoubleCheckBlue = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  font-size: 16px !important;
  color: #53bdeb;
`;
const PendingIcon = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  font-size: 14px !important;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#667781'};
  opacity: 0.6;
`;
}),
"[project]/components/Message.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Message.jsx (Update existing file)
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/moment [external] (moment, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/MoreVert.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Reply$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Reply.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Delete.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/MessageStatus.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
function Message({ messageId, user, message, onDelete, onReply }) {
    const [userLoggedIn] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
    const isOwnMessage = user === userLoggedIn.email;
    const handleMenuOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = ()=>{
        setAnchorEl(null);
    };
    const handleDelete = ()=>{
        onDelete(messageId);
        handleMenuClose();
    };
    const handleReplyClick = ()=>{
        onReply({
            id: messageId,
            user: user,
            message: message.message,
            fileName: message.fileName,
            fileType: message.fileType,
            fileURL: message.fileURL,
            voiceURL: message.voiceURL,
            voiceDuration: message.voiceDuration
        });
        handleMenuClose();
    };
    const renderMessageContent = ()=>{
        // Reply preview
        const replyPreview = message.replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyPreview, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyBorder, {}, void 0, false, {
                    fileName: "[project]/components/Message.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyContent, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyUser, {
                            children: message.replyTo.user
                        }, void 0, false, {
                            fileName: "[project]/components/Message.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyText, {
                            children: message.replyTo.message || message.replyTo.fileName || '🎤 Voice message'
                        }, void 0, false, {
                            fileName: "[project]/components/Message.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Message.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Message.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
        // Voice message
        if (message.voiceURL) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    replyPreview,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VoiceMessageContainer, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("audio", {
                                controls: true,
                                src: message.voiceURL,
                                style: {
                                    maxWidth: '100%'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Message.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            message.voiceDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VoiceDuration, {
                                children: [
                                    Math.floor(message.voiceDuration / 60),
                                    ":",
                                    (message.voiceDuration % 60).toString().padStart(2, '0')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Message.jsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Message.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true);
        }
        // File attachment
        if (message.fileURL) {
            const isImage = message.fileType?.startsWith('image/');
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    replyPreview,
                    isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageImage, {
                        src: message.fileURL,
                        alt: message.fileName
                    }, void 0, false, {
                        fileName: "[project]/components/Message.jsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileAttachment, {
                        href: message.fileURL,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            "📎 ",
                            message.fileName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Message.jsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this),
                    message.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageText, {
                        children: message.message
                    }, void 0, false, {
                        fileName: "[project]/components/Message.jsx",
                        lineNumber: 91,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true);
        }
        // Regular text message
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: [
                replyPreview,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageText, {
                    children: message.message
                }, void 0, false, {
                    fileName: "[project]/components/Message.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TypeOfMessage, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageContent, {
                        children: [
                            renderMessageContent(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageFooter, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Timestamp, {
                                        children: message.timestamp ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(message.timestamp).format("LT") : "..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Message.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        status: message.status || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT,
                                        darkMode: false
                                    }, void 0, false, {
                                        fileName: "[project]/components/Message.jsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Message.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Message.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageActions, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            size: "small",
                            onClick: handleMenuOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "small"
                            }, void 0, false, {
                                fileName: "[project]/components/Message.jsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Message.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Message.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Message.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleMenuClose,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        onClick: handleReplyClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Reply$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "small",
                                style: {
                                    marginRight: 8
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Message.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            "Reply"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Message.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        onClick: handleDelete,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "small",
                                style: {
                                    marginRight: 8
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Message.jsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            "Delete"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Message.jsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Message.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Message.jsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Message;
// Styled Components (keep existing styles and add these)
const MessageFooter = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 4px;
`;
const MessageContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
`;
const MessageActions = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  opacity: 0;
  transition: opacity 0.2s;
`;
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  &:hover ${MessageActions} {
    opacity: 1;
  }
`;
const Sender = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-left: auto;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #dcf8c6;
  width: fit-content;
  max-width: 65%;
  word-wrap: break-word;
  margin-bottom: 8px;
  position: relative;
`;
const Receiver = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(Sender)`
  margin-left: 0;
  margin-right: auto;
  background-color: white;
`;
const MessageText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.5;
`;
const Timestamp = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 11px;
  color: #667781;
  padding: 0;
  margin-left: 8px;
`;
const ReplyPreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  gap: 8px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;
const ReplyBorder = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 4px;
  background-color: #06cf9c;
  border-radius: 2px;
`;
const ReplyContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const ReplyUser = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  font-weight: 600;
  color: #06cf9c;
  margin-bottom: 2px;
`;
const ReplyText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 13px;
  color: #667781;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MessageImage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 4px;
`;
const FileAttachment = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].a`
  display: block;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  margin-bottom: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const VoiceMessageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const VoiceDuration = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 11px;
  color: #667781;
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/components/MessageList.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/components/MessageList.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Message.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const MessageList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ messagesSnapshot, messages, sendingError, onDelete, onReply, darkMode }, ref)=>{
    const showMessages = ()=>{
        if (messagesSnapshot) {
            return messagesSnapshot.docs.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    messageId: message.id,
                    user: message.data().user,
                    message: {
                        ...message.data(),
                        timestamp: message.data().timestamp?.toMillis()
                    },
                    onDelete: onDelete,
                    onReply: onReply
                }, message.id, false, {
                    fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)));
        } else {
            return messages ? JSON.parse(messages).map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    messageId: message.id,
                    user: message.user,
                    message: message,
                    onDelete: onDelete,
                    onReply: onReply
                }, message.id, false, {
                    fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))) : null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MessageContainer"], {
        darkMode: darkMode,
        children: [
            showMessages(),
            sendingError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ErrorAlert"], {
                darkMode: darkMode,
                children: sendingError
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
                lineNumber: 46,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EndOfMessage"], {
                ref: ref
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
MessageList.displayName = 'MessageList';
const __TURBOPACK__default__export__ = MessageList;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/components/ChatInput.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/components/ChatInput.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertEmoticon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/InsertEmoticon.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Mic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Mic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Stop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Stop.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const ChatInput = ({ input, setInput, inputRef, isRecording, recordingTime, onSubmit, onEmojiClick, onStartRecording, onStopRecording, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["InputContainer"], {
        onSubmit: onSubmit,
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                onClick: onEmojiClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertEmoticon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        color: darkMode ? '#e0e0e0' : 'inherit'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RecordingIndicator"], {
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["RecordingDot"], {}, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: [
                            "Recording... ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["formatTime"])(recordingTime)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onStopRecording,
                        style: {
                            color: darkMode ? '#e0e0e0' : '#f44336'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Stop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                ref: inputRef,
                darkMode: darkMode,
                value: input,
                onChange: (e)=>setInput(e.target.value),
                placeholder: "Type a message",
                type: "text"
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                lineNumber: 43,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["SendButton"], {
                type: "submit",
                disabled: !input?.trim(),
                darkMode: darkMode,
                children: "Send"
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                onClick: isRecording ? onStopRecording : onStartRecording,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Mic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        color: isRecording ? '#f44336' : darkMode ? '#e0e0e0' : 'inherit'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ChatInput;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/components/EmojiPicker.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/EmojiPicker.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Popover$2f$Popover$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Popover/Popover.js [ssr] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Tab/Tab.js [ssr] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Search.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
const EmojiPicker = ({ open, anchorEl, onClose, selectedCategory, onCategoryChange, searchTerm, onSearchChange, emojis, onEmojiSelect, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Popover$2f$Popover$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
        open: open,
        anchorEl: anchorEl,
        onClose: onClose,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        PaperProps: {
            style: {
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#e0e0e0' : 'black',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiPickerContainer"], {
            darkMode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiPickerHeader"], {
                    darkMode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            children: "Emojis"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            onClick: onClose,
                            size: "small",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                style: {
                                    color: darkMode ? '#e0e0e0' : 'inherit'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiSearchContainer"], {
                    darkMode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            style: {
                                color: darkMode ? '#888' : '#666'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiSearchInput"], {
                            darkMode: darkMode,
                            placeholder: "Search emoji...",
                            value: searchTerm,
                            onChange: (e)=>onSearchChange(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiCategoryTabs"], {
                    value: selectedCategory,
                    onChange: (e, newValue)=>onCategoryChange(newValue),
                    variant: "scrollable",
                    scrollButtons: "auto",
                    darkMode: darkMode,
                    TabIndicatorProps: {
                        style: {
                            backgroundColor: darkMode ? '#d32f2f' : '#f44336'
                        }
                    },
                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EMOJI_CATEGORIES"]).map(([key, { name, icon }])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                            value: key,
                            label: icon,
                            title: name,
                            style: {
                                color: darkMode ? '#e0e0e0' : 'black',
                                minWidth: 50
                            }
                        }, key, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiGrid"], {
                    darkMode: darkMode,
                    children: emojis.length > 0 ? emojis.map((emoji, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiButton"], {
                            onClick: ()=>onEmojiSelect(emoji),
                            darkMode: darkMode,
                            children: emoji
                        }, `${emoji}-${index}`, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 99,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["NoEmojisMessage"], {
                        darkMode: darkMode,
                        children: selectedCategory === "recent" ? "No recent emojis. Start using emojis!" : "No emojis found"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = EmojiPicker;
}),
"[project]/components/ChatScreen/components/FileUploadDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/components/FileUploadDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.js [ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Send.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const FileUploadDialog = ({ open, onClose, file, filePreview, input, onInputChange, uploadProgress, isUploading, onSend, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            style: {
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#e0e0e0' : 'black'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                style: {
                    color: darkMode ? '#e0e0e0' : 'black'
                },
                children: [
                    "Send File",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onClose,
                        style: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    filePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FilePreview"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            src: filePreview,
                            alt: "Preview",
                            style: {
                                maxWidth: '100%',
                                maxHeight: '300px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FileInfo"], {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: "File:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                        lineNumber: 58,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    file?.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: "Size:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                        lineNumber: 59,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["formatFileSize"])(file?.size),
                                    " MB"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: "Type:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                        lineNumber: 60,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    file?.type || 'Unknown'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FileInput"], {
                        darkMode: darkMode,
                        value: input,
                        onChange: (e)=>onInputChange(e.target.value),
                        placeholder: "Add a message (optional)",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["UploadProgress"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                variant: "determinate",
                                value: uploadProgress
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    Math.round(uploadProgress),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onClose,
                        style: {
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onSend,
                        variant: "contained",
                        disabled: isUploading,
                        style: {
                            backgroundColor: darkMode ? '#d32f2f' : '#f44336',
                            color: 'white'
                        },
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                            lineNumber: 85,
                            columnNumber: 22
                        }, void 0),
                        children: isUploading ? 'Sending...' : 'Send'
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FileUploadDialog;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/components/VoiceRecordingDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.js [ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Send.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const VoiceRecordingDialog = ({ open, audioBlob, recordingTime, uploadProgress, isUploading, onCancel, onSend, onError, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onCancel,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            style: {
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#e0e0e0' : 'black'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                style: {
                    color: darkMode ? '#e0e0e0' : 'black'
                },
                children: "Voice Message Recorded"
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["VoicePreview"], {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    "Duration: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["formatTime"])(recordingTime)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            audioBlob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: darkMode ? '#888' : '#666'
                                        },
                                        children: [
                                            "Size: ",
                                            (audioBlob.size / 1024).toFixed(2),
                                            " KB"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: darkMode ? '#888' : '#666'
                                        },
                                        children: [
                                            "Type: ",
                                            audioBlob.type
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("audio", {
                                        controls: true,
                                        src: URL.createObjectURL(audioBlob),
                                        style: {
                                            width: '100%',
                                            marginTop: 10
                                        },
                                        onError: (e)=>{
                                            console.error('Audio playback error:', e);
                                            onError('Failed to play audio. The recording might be corrupted.');
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["UploadProgress"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                variant: "determinate",
                                value: uploadProgress
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    Math.round(uploadProgress),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onCancel,
                        disabled: isUploading,
                        style: {
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onSend,
                        variant: "contained",
                        disabled: isUploading || !audioBlob || audioBlob.size === 0,
                        style: {
                            backgroundColor: darkMode ? '#d32f2f' : '#f44336',
                            color: 'white'
                        },
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                            lineNumber: 81,
                            columnNumber: 22
                        }, void 0),
                        children: isUploading ? 'Sending...' : 'Send'
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VoiceRecordingDialog;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/components/ProfileDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/ProfileDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/timeago-react [external] (timeago-react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
;
;
;
;
;
;
const ProfileDialog = ({ open, onClose, recipient, recipientEmail, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            style: {
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#e0e0e0' : 'black'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                style: {
                    color: darkMode ? '#e0e0e0' : 'black'
                },
                children: [
                    "User Profile",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onClose,
                        style: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ProfileContainer"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            src: recipient?.photoURL,
                            style: {
                                width: 100,
                                height: 100,
                                margin: '0 auto 20px'
                            },
                            children: recipientEmail?.[0]?.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ProfileInfo"], {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    children: recipientEmail
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            children: "Last Seen:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        recipient?.lastSeen?.toDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__["default"], {
                                            datetime: recipient.lastSeen.toDate()
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : "Not available"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                recipient?.displayName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                            lineNumber: 56,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        recipient.displayName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    onClick: onClose,
                    style: {
                        color: darkMode ? '#e0e0e0' : 'inherit'
                    },
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProfileDialog;
}),
"[project]/components/ChatScreen/components/ReplyPreview.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/ReplyPreview.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
;
;
;
;
;
const ReplyPreview = ({ replyingTo, userEmail, onCancel, darkMode })=>{
    if (!replyingTo) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyPreviewBar"], {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyBarIndicator"], {}, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyPreviewContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyPreviewHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: [
                                    "Replying to ",
                                    replyingTo.user === userEmail ? 'yourself' : replyingTo.user
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                onClick: onCancel,
                                size: "small",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small",
                                    style: {
                                        color: darkMode ? '#e0e0e0' : 'inherit'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyPreviewText"], {
                        darkMode: darkMode,
                        children: replyingTo.message || replyingTo.fileName || '🎤 Voice message'
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ReplyPreview;
}),
"[project]/components/ChatScreen/utils/messageStatus.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/utils/messageStatus.js
__turbopack_context__.s([
    "markMessageAsDelivered",
    ()=>markMessageAsDelivered,
    "markMessageAsRead",
    ()=>markMessageAsRead,
    "markUserMessagesAsDelivered",
    ()=>markUserMessagesAsDelivered,
    "markUserMessagesAsRead",
    ()=>markUserMessagesAsRead,
    "subscribeToRecipientStatus",
    ()=>subscribeToRecipientStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const markMessageAsDelivered = async (chatId, messageId)=>{
    try {
        const messageRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(messageRef, {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
            deliveredAt: new Date()
        });
    } catch (error) {
        console.error("Error marking message as delivered:", error);
    }
};
const markMessageAsRead = async (chatId, messageId)=>{
    try {
        const messageRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(messageRef, {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
            readAt: new Date()
        });
    } catch (error) {
        console.error("Error marking message as read:", error);
    }
};
const markUserMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail)=>{
    try {
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        if (snapshot.empty) return;
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        snapshot.docs.forEach((document)=>{
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
                deliveredAt: new Date()
            });
        });
        await batch.commit();
        console.log(`Marked ${snapshot.docs.length} messages as delivered`);
    } catch (error) {
        console.error("Error marking messages as delivered:", error);
    }
};
const markUserMessagesAsRead = async (chatId, recipientEmail, currentUserEmail)=>{
    try {
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        // Get all messages that are either sent or delivered, but not read
        const sentQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const deliveredQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED));
        const [sentSnapshot, deliveredSnapshot] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(sentQuery),
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(deliveredQuery)
        ]);
        const allDocs = [
            ...sentSnapshot.docs,
            ...deliveredSnapshot.docs
        ];
        if (allDocs.length === 0) return;
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        allDocs.forEach((document)=>{
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
                readAt: new Date()
            });
        });
        await batch.commit();
        console.log(`Marked ${allDocs.length} messages as read`);
    } catch (error) {
        console.error("Error marking messages as read:", error);
    }
};
const subscribeToRecipientStatus = (recipientEmail, onStatusChange)=>{
    const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
    const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail));
    const unsubscribe = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(q, (snapshot)=>{
        if (!snapshot.empty) {
            const recipientData = snapshot.docs[0].data();
            onStatusChange(recipientData);
        }
    });
    return unsubscribe;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useMessageStatus.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useMessageStatus.js
__turbopack_context__.s([
    "useMessageStatus",
    ()=>useMessageStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils/messageStatus.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const useMessageStatus = (chatId, recipientEmail)=>{
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    // Mark messages as delivered when component mounts (user opened chat)
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!chatId || !recipientEmail || !user) return;
        const markAsDelivered = async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["markUserMessagesAsDelivered"])(chatId, recipientEmail, user.email);
        };
        markAsDelivered();
    }, [
        chatId,
        recipientEmail,
        user
    ]);
    // Mark messages as read when user is actively viewing the chat
    const markMessagesAsRead = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (!chatId || !recipientEmail || !user) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["markUserMessagesAsRead"])(chatId, recipientEmail, user.email);
    }, [
        chatId,
        recipientEmail,
        user
    ]);
    // Mark messages as read when user scrolls or interacts with chat
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!chatId || !recipientEmail || !user) return;
        // Mark as read immediately when chat is opened
        markMessagesAsRead();
        // Mark as read when user focuses on the window
        const handleFocus = ()=>{
            markMessagesAsRead();
        };
        // Mark as read when user scrolls (debounced)
        let scrollTimeout;
        const handleScroll = ()=>{
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(()=>{
                markMessagesAsRead();
            }, 500);
        };
        window.addEventListener("focus", handleFocus);
        window.addEventListener("scroll", handleScroll, true);
        return ()=>{
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("scroll", handleScroll, true);
            clearTimeout(scrollTimeout);
        };
    }, [
        chatId,
        recipientEmail,
        user,
        markMessagesAsRead
    ]);
    // Listen to recipient's status to auto-update message status
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!recipientEmail) return;
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["subscribeToRecipientStatus"])(recipientEmail, (recipientData)=>{
            // When recipient comes online, mark messages as delivered
            if (recipientData.isOnline) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["markUserMessagesAsDelivered"])(chatId, recipientEmail, user?.email);
            }
        });
        return ()=>unsubscribe();
    }, [
        recipientEmail,
        chatId,
        user
    ]);
    return {
        markMessagesAsRead,
        markUserMessagesAsDelivered: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["markUserMessagesAsDelivered"]
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/index.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useEmojiPicker$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useEmojiPicker.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useFileUpload.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useVoiceRecording.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useRecipientData.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useMessages.js [ssr] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatHeader$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ChatHeader.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/MessageList.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInput$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ChatInput.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$EmojiPicker$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/EmojiPicker.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/FileUploadDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ProfileDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ProfileDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ReplyPreview$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ReplyPreview.jsx [ssr] (ecmascript)");
// Styled Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
// Utils
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useMessageStatus.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInput$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInput$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ChatScreen({ chat, messages }) {
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const endOfMessagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [sendingError, setSendingError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showProfile, setShowProfile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    const chatId = router?.query?.id || null;
    // Custom Hooks
    const { recipientEmail, recipient, recipientSnapshot, isSelfChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRecipientData"])(user, chat);
    const { markMessagesAsRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useMessageStatus"])(chatId, recipientEmail);
    const { messagesSnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useMessages"])(chatId);
    const emojiPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useEmojiPicker$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useEmojiPicker"])();
    const fileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useFileUpload"])(chatId, user, recipientEmail);
    const voiceRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useVoiceRecording"])(chatId, user, recipientEmail);
    // Monitor online status
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleOnline = ()=>{
            setIsOnline(true);
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["enableNetwork"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        };
        const handleOffline = ()=>{
            setIsOnline(false);
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["disableNetwork"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        };
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return ()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    // Scroll to bottom
    const scrollToBottom = ()=>{
        if (endOfMessagesRef?.current) {
            endOfMessagesRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messagesSnapshot
    ]);
    // Handle emoji selection
    const handleEmojiClick = (emoji)=>{
        const cursorPosition = inputRef.current?.selectionStart || input.length;
        const textBeforeCursor = input.slice(0, cursorPosition);
        const textAfterCursor = input.slice(cursorPosition);
        setInput(textBeforeCursor + emoji + textAfterCursor);
        emojiPicker.saveRecentEmoji(emoji);
        setTimeout(()=>{
            if (inputRef.current) {
                inputRef.current.focus();
                const newPosition = cursorPosition + emoji.length;
                inputRef.current.setSelectionRange(newPosition, newPosition);
            }
        }, 0);
    };
    // Delete message
    const deleteMessage = async (messageId)=>{
        if (!chatId || !messageId) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId));
            console.log("Message deleted successfully");
        } catch (error) {
            console.error("Error deleting message:", error);
            setSendingError("Failed to delete message. Please try again.");
        }
    };
    // Set reply
    const handleReply = (messageData)=>{
        setReplyingTo(messageData);
        inputRef.current?.focus();
    };
    // Cancel reply
    const cancelReply = ()=>{
        setReplyingTo(null);
    };
    // Send text message
    const sendMessage = async (e)=>{
        e.preventDefault();
        setSendingError(null);
        if (!input?.trim() || !chatId || !user || !recipientEmail) return;
        try {
            // Skip blocking check for self-chat
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    return;
                }
            }
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: input,
                user: user.email,
                photoURL: user.photoURL,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT
            };
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            setInput("");
            setReplyingTo(null);
            scrollToBottom();
        } catch (error) {
            console.error("Error sending message:", error);
            setSendingError("Failed to send message. Please try again.");
        }
    };
    if (!isOnline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Container"], {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["OfflineMessage"], {
                darkMode: darkMode,
                children: "You are currently offline. Please check your internet connection."
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/index.jsx",
            lineNumber: 195,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Container"], {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                darkMode: darkMode,
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 206,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/index.jsx",
            lineNumber: 205,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Container"], {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatHeader$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                recipient: recipient,
                recipientEmail: recipientEmail,
                recipientSnapshot: recipientSnapshot,
                isSelfChat: isSelfChat,
                onAttachFile: ()=>fileInputRef.current?.click(),
                onMoreClick: ()=>setShowProfile(true),
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                hidden: true,
                onChange: fileUpload.handleFileSelect,
                accept: "*/*"
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: endOfMessagesRef,
                messagesSnapshot: messagesSnapshot,
                messages: messages,
                sendingError: sendingError,
                onDelete: deleteMessage,
                onReply: handleReply,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$EmojiPicker$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: emojiPicker.openEmojiPicker,
                anchorEl: emojiPicker.emojiAnchorEl,
                onClose: emojiPicker.handleEmojiPickerClose,
                selectedCategory: emojiPicker.selectedEmojiCategory,
                onCategoryChange: emojiPicker.setSelectedEmojiCategory,
                searchTerm: emojiPicker.emojiSearchTerm,
                onSearchChange: emojiPicker.setEmojiSearchTerm,
                emojis: emojiPicker.getFilteredEmojis(),
                onEmojiSelect: handleEmojiClick,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: fileUpload.showFileConfirmation,
                onClose: fileUpload.cancelFileSelection,
                file: fileUpload.selectedFile,
                filePreview: fileUpload.filePreview,
                input: input,
                onInputChange: setInput,
                uploadProgress: fileUpload.uploadProgress,
                isUploading: fileUpload.isUploading,
                onSend: ()=>fileUpload.sendFileMessage(input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom),
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: voiceRecording.audioBlob !== null,
                audioBlob: voiceRecording.audioBlob,
                recordingTime: voiceRecording.recordingTime,
                uploadProgress: voiceRecording.uploadProgress,
                isUploading: voiceRecording.isUploading,
                onCancel: voiceRecording.cancelRecording,
                onSend: ()=>voiceRecording.sendVoiceMessage(replyingTo, setSendingError, setReplyingTo, scrollToBottom),
                onError: setSendingError,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ProfileDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showProfile,
                onClose: ()=>setShowProfile(false),
                recipient: recipient,
                recipientEmail: recipientEmail,
                isSelfChat: isSelfChat,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ReplyPreview$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                replyingTo: replyingTo,
                userEmail: user?.email,
                onCancel: cancelReply,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInput$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                input: input,
                setInput: setInput,
                inputRef: inputRef,
                isRecording: voiceRecording.isRecording,
                recordingTime: voiceRecording.recordingTime,
                onSubmit: sendMessage,
                onEmojiClick: emojiPicker.handleEmojiPickerOpen,
                onStartRecording: ()=>voiceRecording.startRecording(setSendingError),
                onStopRecording: voiceRecording.stopRecording,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/index.jsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatScreen;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/index.jsx [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ChatScreen/index.jsx [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac5a79ba._.js.map