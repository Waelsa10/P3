module.exports = [
"[project]/utils/getRecipientEmail.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/getRecipientEmail.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getRecipientEmail = (users, userLoggedIn)=>{
    // Return null if either users or userLoggedIn is missing
    if (!users || !Array.isArray(users) || !userLoggedIn?.email) {
        console.log("getRecipientEmail: Missing data", {
            users,
            hasUser: !!userLoggedIn
        });
        return null;
    }
    // Normalize emails to lowercase for comparison
    const normalizedUserEmail = userLoggedIn.email.toLowerCase();
    const normalizedUsers = users.map((email)=>email?.toLowerCase()).filter(Boolean);
    console.log("getRecipientEmail: Processing", {
        normalizedUsers,
        normalizedUserEmail
    });
    // Check if this is a self-chat (both users are the same)
    const isSelfChat = normalizedUsers.length === 2 && normalizedUsers.every((email)=>email === normalizedUserEmail);
    if (isSelfChat) {
        console.log("getRecipientEmail: Self-chat detected");
        return userLoggedIn.email; // Return original email (not normalized)
    }
    // Filter out the current user's email to find the other participant
    const recipientEmails = users.filter((email)=>email && email.toLowerCase() !== normalizedUserEmail);
    console.log("getRecipientEmail: Found recipients", recipientEmails);
    // Return the first recipient email, or user's email if none found
    return recipientEmails.length > 0 ? recipientEmails[0] : userLoggedIn.email;
};
const __TURBOPACK__default__export__ = getRecipientEmail;
}),
"[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-firebase-hooks/firestore", () => require("react-firebase-hooks/firestore"));

module.exports = mod;
}),
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
    READ: 'read'
};
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
function MessageStatus({ status, darkMode }) {
    if (!status || status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT) {
        // Single gray checkmark for sent
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Done$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    if (status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED) {
        // Double gray checkmarks for delivered
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    if (status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ) {
        // Double blue checkmarks for read
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            isRead: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return null;
}
const __TURBOPACK__default__export__ = MessageStatus;
const StatusIcon = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  display: inline-flex;
  align-items: center;
  color: ${(props)=>props.isRead ? '#53bdeb' : props.darkMode ? '#8696a0' : '#667781'};
  margin-left: 4px;
`;
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
"[project]/components/Chat.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Chat.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getRecipientEmail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/getRecipientEmail.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/MessageStatus.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
function Chat({ id, users, latestMessage: propLatestMessage }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const [latestMessage, setLatestMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(propLatestMessage || null);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    const recipientEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getRecipientEmail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(users, user);
    const isSelfChat = users?.length === 2 && users.every((email)=>email?.toLowerCase() === user?.email?.toLowerCase());
    // Get recipient info - only query if recipientEmail exists
    const recipientQuery = recipientEmail ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail)) : null;
    const [recipientSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(recipientQuery);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    // Real-time listener for latest message and unread count
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Exit early if required data is missing
        if (!id || !user || !recipientEmail) {
            console.log("Missing required data for Chat:", {
                id,
                user: !!user,
                recipientEmail
            });
            return;
        }
        // Real-time listener for latest message
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", id, "messages");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["orderBy"])("timestamp", "desc"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["limit"])(1));
        const unsubscribeMessages = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(q, (snapshot)=>{
            if (!snapshot.empty) {
                const messageData = snapshot.docs[0].data();
                setLatestMessage({
                    id: snapshot.docs[0].id,
                    ...messageData,
                    timestamp: messageData.timestamp?.toMillis()
                });
            } else {
                setLatestMessage(null);
            }
        }, (error)=>{
            console.error("Error listening to messages:", error);
        });
        // Real-time listener for unread count (skip for self-chat)
        let unsubscribeUnread = ()=>{};
        if (!isSelfChat && recipientEmail) {
            const unreadQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "in", [
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT,
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED
            ]));
            unsubscribeUnread = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(unreadQuery, (snapshot)=>{
                setUnreadCount(snapshot.docs.length);
            }, (error)=>{
                console.error("Error listening to unread count:", error);
                setUnreadCount(0);
            });
        }
        return ()=>{
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecipientName, {
                darkMode: darkMode,
                children: isSelfChat ? `${user.displayName || user.email} (You)` : recipientEmail
            }, void 0, false, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 95,
                columnNumber: 19
            }, this);
            unsubscribeMessages();
            unsubscribeUnread();
        };
    }, [
        id,
        user,
        recipientEmail,
        isSelfChat
    ]);
    const enterChat = ()=>{
        router.push(`/chat/${id}`);
    };
    // Format timestamp
    const formatTimestamp = (timestamp)=>{
        if (!timestamp) return "";
        const messageDate = new Date(timestamp);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        // Check if today
        if (messageDate.toDateString() === today.toDateString()) {
            return messageDate.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        // Check if yesterday
        if (messageDate.toDateString() === yesterday.toDateString()) {
            return "Yesterday";
        }
        // Check if within this week
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        if (messageDate > weekAgo) {
            return messageDate.toLocaleDateString([], {
                weekday: 'short'
            });
        }
        // Older messages
        return messageDate.toLocaleDateString([], {
            month: 'short',
            day: 'numeric'
        });
    };
    // Truncate message
    const truncateMessage = (message, maxLength = 35)=>{
        if (!message) return "";
        if (message.length <= maxLength) return message;
        return message.substring(0, maxLength) + "...";
    };
    // Get preview text for the message
    const getMessagePreview = ()=>{
        if (!latestMessage) return "No messages yet";
        // Voice message
        if (latestMessage.voiceURL) {
            return "🎤 Voice message";
        }
        // File attachment
        if (latestMessage.fileURL) {
            if (latestMessage.fileType?.startsWith('image/')) {
                return "📷 Photo";
            }
            if (latestMessage.fileType?.startsWith('video/')) {
                return "🎥 Video";
            }
            if (latestMessage.fileType?.startsWith('audio/')) {
                return "🎵 Audio";
            }
            return `📎 ${truncateMessage(latestMessage.fileName || 'File', 25)}`;
        }
        // Regular text message
        return truncateMessage(latestMessage.message);
    };
    const isOwnMessage = latestMessage?.user === user?.email;
    const hasUnread = unreadCount > 0 && !isOwnMessage;
    // Don't render if missing essential data
    if (!recipientEmail) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        onClick: enterChat,
        darkMode: darkMode,
        children: [
            recipient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                src: recipient?.photoURL
            }, void 0, false, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 182,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                children: recipientEmail?.[0]?.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatContent, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatHeader, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecipientName, {
                                darkMode: darkMode,
                                children: isSelfChat ? `${recipientEmail} (You)` : recipientEmail
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            latestMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageTime, {
                                darkMode: darkMode,
                                children: formatTimestamp(latestMessage.timestamp)
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chat.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LastMessageContainer, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LastMessage, {
                                isOwnMessage: isOwnMessage,
                                children: [
                                    isOwnMessage && latestMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusWrapper, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            status: latestMessage.status || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT,
                                            darkMode: darkMode
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chat.js",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chat.js",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageText, {
                                        hasUnread: hasUnread,
                                        darkMode: darkMode,
                                        children: getMessagePreview()
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chat.js",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            hasUnread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UnreadBadge, {
                                darkMode: darkMode,
                                children: unreadCount
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chat.js",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Chat.js",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Chat;
// Styled Components
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  transition: background-color 0.2s;

  :hover {
    background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  }
`;
const UserAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"])`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`;
const ChatContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`;
const ChatHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;
const RecipientName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : '#000'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;
const MessageTime = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#667781'};
  margin-left: 8px;
  flex-shrink: 0;
`;
const LastMessageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
const LastMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;
const StatusWrapper = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;
const MessageText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 14px;
  color: ${(props)=>{
    if (props.hasUnread) {
        return props.darkMode ? '#e0e0e0' : '#000';
    }
    return props.darkMode ? '#8696a0' : '#667781';
}};
  font-weight: ${(props)=>props.hasUnread ? '600' : '400'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;
const UnreadBadge = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  background-color: ${(props)=>props.darkMode ? '#00a884' : '#25d366'};
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  padding: 0 6px;
  flex-shrink: 0;
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/email-validator [external] (email-validator, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("email-validator", () => require("email-validator"));

module.exports = mod;
}),
"[project]/components/Sidebar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Sidebar.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Chat.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/MoreVert.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Search.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chat.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$email$2d$validator__$5b$external$5d$__$28$email$2d$validator$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/email-validator [external] (email-validator, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/FormControlLabel/FormControlLabel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Switch/Switch.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/List/List.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItem/ListItem.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemSecondaryAction$2f$ListItemSecondaryAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
;
;
function Sidebar({ isMobile, sidebarOpen, setSidebarOpen }) {
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [headerAnchorEl, setHeaderAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedChatId, setSelectedChatId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedChatUsers, setSelectedChatUsers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [aboutOpen, setAboutOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [blockedUsersOpen, setBlockedUsersOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [chatsList, setChatsList] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode, toggleDarkMode } = darkModeContext || {
        darkMode: false,
        toggleDarkMode: ()=>{}
    };
    const userChatsRef = user ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("users", "array-contains", user.email)) : null;
    const [chatsSnapshot, loading, error] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(userChatsRef);
    // Get current user document to check blocked users
    const userDocRef = user ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid) : null;
    const [userDocSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(userDocRef ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("__name__", "==", user.uid)) : null);
    const currentUserData = userDocSnapshot?.docs?.[0]?.data();
    const blockedUsers = currentUserData?.blockedUsers || [];
    // Sort chats by latest message
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!chatsSnapshot || !user) {
            setChatsList([]);
            return;
        }
        const loadChatsWithLatestMessage = async ()=>{
            const chatsWithMessages = await Promise.all(chatsSnapshot.docs.filter((chat)=>{
                const deletedBy = chat.data().deletedBy || [];
                return !deletedBy.includes(user.email);
            }).map(async (chat)=>{
                try {
                    const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chat.id, "messages");
                    const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["orderBy"])("timestamp", "desc"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["limit"])(1));
                    const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
                    const latestMessage = snapshot.empty ? null : {
                        ...snapshot.docs[0].data(),
                        timestamp: snapshot.docs[0].data().timestamp?.toMillis() || 0
                    };
                    return {
                        id: chat.id,
                        data: chat.data(),
                        latestMessage,
                        latestTimestamp: latestMessage?.timestamp || 0
                    };
                } catch (error) {
                    console.error("Error loading message for chat:", chat.id, error);
                    return {
                        id: chat.id,
                        data: chat.data(),
                        latestMessage: null,
                        latestTimestamp: 0
                    };
                }
            }));
            // Sort by latest message timestamp (newest first)
            const sortedChats = chatsWithMessages.sort((a, b)=>{
                return b.latestTimestamp - a.latestTimestamp;
            });
            setChatsList(sortedChats);
        };
        loadChatsWithLatestMessage();
    }, [
        chatsSnapshot,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (error) {
            console.error("Collection error:", error);
        }
    }, [
        error
    ]);
    const chatAlreadyExist = (recipientEmail)=>{
        if (!chatsSnapshot) return false;
        if (recipientEmail === user.email) {
            return !!chatsSnapshot.docs.find((chat)=>{
                const users = chat.data().users;
                return users.length === 2 && users[0] === user.email && users[1] === user.email;
            });
        }
        return !!chatsSnapshot.docs.find((chat)=>{
            const users = chat.data().users;
            return users.includes(recipientEmail) && users.includes(user.email);
        });
    };
    const createChat = async ()=>{
        if (!user) {
            console.error("No user logged in");
            return;
        }
        const input = prompt("Please enter an email address for the user you wish to chat with");
        if (!input) {
            return;
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$email$2d$validator__$5b$external$5d$__$28$email$2d$validator$2c$__cjs$29$__["validate"](input)) {
            alert("Please enter a valid email address");
            return;
        }
        if (chatAlreadyExist(input)) {
            alert("Chat already exists with this user");
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats"), {
                users: [
                    user.email,
                    input
                ],
                deletedBy: [],
                createdAt: new Date()
            });
        } catch (error) {
            console.error("Error creating chat:", error);
            alert(`Failed to create chat: ${error.message}`);
        }
    };
    const handleMenuOpen = (event, chatId, chatUsers)=>{
        setAnchorEl(event.currentTarget);
        setSelectedChatId(chatId);
        setSelectedChatUsers(chatUsers);
    };
    const handleMenuClose = ()=>{
        setAnchorEl(null);
        setSelectedChatId(null);
        setSelectedChatUsers(null);
    };
    const handleHeaderMenuOpen = (event)=>{
        setHeaderAnchorEl(event.currentTarget);
    };
    const handleHeaderMenuClose = ()=>{
        setHeaderAnchorEl(null);
    };
    const handleSettingsOpen = ()=>{
        setSettingsOpen(true);
        handleHeaderMenuClose();
    };
    const handleSettingsClose = ()=>{
        setSettingsOpen(false);
    };
    const handleAboutOpen = ()=>{
        setAboutOpen(true);
        handleHeaderMenuClose();
    };
    const handleAboutClose = ()=>{
        setAboutOpen(false);
    };
    const handleBlockedUsersOpen = ()=>{
        setBlockedUsersOpen(true);
        handleHeaderMenuClose();
    };
    const handleBlockedUsersClose = ()=>{
        setBlockedUsersOpen(false);
    };
    const deleteChat = async ()=>{
        if (!selectedChatId || !user) return;
        try {
            const chatRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", selectedChatId);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(chatRef, {
                deletedBy: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayUnion"])(user.email)
            });
            handleMenuClose();
            alert("Chat deleted");
        } catch (error) {
            console.error("Error deleting chat:", error);
            alert("Failed to delete chat");
        }
    };
    const blockUser = async ()=>{
        if (!selectedChatUsers || !user) return;
        const recipientEmail = selectedChatUsers.find((email)=>email !== user.email);
        if (!recipientEmail || recipientEmail === user.email) {
            alert("You cannot block yourself");
            return;
        }
        try {
            const userDocRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userDocRef, {
                email: user.email,
                blockedUsers: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayUnion"])(recipientEmail)
            }, {
                merge: true
            });
            handleMenuClose();
            alert(`${recipientEmail} has been blocked. They can no longer send you messages.`);
        } catch (error) {
            console.error("Error blocking user:", error);
            alert("Failed to block user");
        }
    };
    const unblockUser = async (emailToUnblock)=>{
        if (!user) return;
        try {
            const userDocRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(userDocRef, {
                blockedUsers: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayRemove"])(emailToUnblock)
            });
            alert(`${emailToUnblock} has been unblocked`);
        } catch (error) {
            console.error("Error unblocking user:", error);
            alert("Failed to unblock user");
        }
    };
    const isUserBlocked = ()=>{
        if (!selectedChatUsers || !user) return false;
        const recipientEmail = selectedChatUsers.find((email)=>email !== user.email);
        if (!recipientEmail) return false;
        return blockedUsers.includes(recipientEmail);
    };
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        darkMode: darkMode,
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/components/Sidebar.js",
        lineNumber: 302,
        columnNumber: 21
    }, this);
    const filteredChats = chatsList.filter((chat)=>{
        if (!searchTerm.trim()) return true;
        const chatUsers = chat.data.users || [];
        const otherUser = chatUsers.find((email)=>email !== user.email);
        if (!otherUser) {
            return user.email?.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return otherUser?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            isMobile && sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Overlay, {
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 321,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
                darkMode: darkMode,
                isMobile: isMobile,
                sidebarOpen: sidebarOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Header, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].signOut(),
                                src: user.photoURL
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(IconsContainer, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: handleHeaderMenuOpen,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this),
                                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: ()=>setSidebarOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Search, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SearchInput, {
                                darkMode: darkMode,
                                placeholder: "Search in chats",
                                type: "text",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SidebarButton, {
                        onClick: createChat,
                        disabled: loading,
                        children: "Start a new chat"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LoadingContainer, {
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: "Loading chats..."
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.js",
                            lineNumber: 363,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this) : filteredChats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatWrapper, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    id: chat.id,
                                    users: chat.data.users,
                                    latestMessage: chat.latestMessage
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OptionsButton, {
                                    onClick: (e)=>handleMenuOpen(e, chat.id, chat.data.users),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 373,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, chat.id, true, {
                            fileName: "[project]/components/Sidebar.js",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        anchorEl: headerAnchorEl,
                        open: Boolean(headerAnchorEl),
                        onClose: handleHeaderMenuClose,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: handleSettingsOpen,
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: handleBlockedUsersOpen,
                                children: "Blocked Users"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: handleAboutOpen,
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        anchorEl: anchorEl,
                        open: Boolean(anchorEl),
                        onClose: handleMenuClose,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            selectedChatUsers && selectedChatUsers.find((email)=>email !== user.email) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: isUserBlocked() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>{
                                        const recipientEmail = selectedChatUsers.find((email)=>email !== user.email);
                                        unblockUser(recipientEmail);
                                        handleMenuClose();
                                    },
                                    children: "Unblock User"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 413,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: blockUser,
                                    children: "Block User"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: deleteChat,
                                children: "Delete Chat"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        open: settingsOpen,
                        onClose: handleSettingsClose,
                        maxWidth: "sm",
                        fullWidth: true,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 440,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        checked: darkMode,
                                        onChange: toggleDarkMode,
                                        color: "primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, void 0),
                                    label: "Dark Mode"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleSettingsClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        open: blockedUsersOpen,
                        onClose: handleBlockedUsersClose,
                        maxWidth: "sm",
                        fullWidth: true,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "Blocked Users"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: blockedUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "body2",
                                    color: "textSecondary",
                                    children: "No blocked users"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: blockedUsers.map((blockedEmail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    primary: blockedEmail,
                                                    primaryTypographyProps: {
                                                        style: {
                                                            color: darkMode ? '#e0e0e0' : 'black'
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 480,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemSecondaryAction$2f$ListItemSecondaryAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "outlined",
                                                        size: "small",
                                                        onClick: ()=>unblockUser(blockedEmail),
                                                        children: "Unblock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.js",
                                                        lineNumber: 487,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 486,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, blockedEmail, true, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 479,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleBlockedUsersClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        open: aboutOpen,
                        onClose: handleAboutClose,
                        maxWidth: "sm",
                        fullWidth: true,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "h6",
                                        gutterBottom: true,
                                        children: "Chat Application"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body1",
                                        paragraph: true,
                                        children: "Version: 1.0.0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        paragraph: true,
                                        children: "A real-time messaging application built with React and Firebase. Connect with friends and family through instant messaging."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        paragraph: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            children: "Features:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 529,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        component: "div",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Real-time messaging"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 534,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "User authentication"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 535,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Search chats"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 536,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Block/Unblock users"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 537,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Delete conversations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 538,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Dark mode support"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 539,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Chat with yourself (like WhatsApp)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 540,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Sorted by latest message"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 541,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "File sharing support"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 542,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Voice messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 543,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 533,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        color: "textSecondary",
                                        style: {
                                            marginTop: 20
                                        },
                                        children: "© 2024 Chat App. All rights reserved."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleAboutClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 550,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = Sidebar;
// Updated Styled Components with responsive design
const Overlay = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  
  @media (min-width: 1025px) {
    display: none;
  }
`;
// components/Sidebar.jsx - Better responsive Container
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 0.45;
  border-right: 1px solid ${(props)=>props.darkMode ? '#333' : 'whitesmoke'};
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  /* Mobile and Tablet Responsive */
  @media (max-width: 1024px) {
    ${(props)=>props.sidebarOpen ? `
      /* When sidebar is open on mobile - take full width */
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 999;
      max-width: 100%;
      width: 100%;
      transform: translateX(0);
    ` : `
      /* When sidebar is closed - hide off screen */
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 999;
      max-width: 85%;
      width: 85%;
      transform: translateX(-100%);
    `}
    transition: transform 0.3s ease-in-out;
    box-shadow: ${(props)=>props.sidebarOpen ? '2px 0 10px rgba(0,0,0,0.3)' : 'none'};
  }
`;
const UserAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const SidebarButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Search = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
`;
const SearchInput = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  
  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const Header = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#333' : 'whitesmoke'};
`;
const IconsContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
`;
const ChatWrapper = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  &:hover {
    background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  }
`;
const OptionsButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  visibility: hidden;
  
  ${ChatWrapper}:hover & {
    visibility: visible;
  }
`;
const LoadingContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${(props)=>props.darkMode ? '#888' : '#666'};
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Sidebar.js [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6c01c6ad._.js.map