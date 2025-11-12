module.exports = [
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
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
;
const useFileUpload = (chatId, user, recipientEmail)=>{
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [filePreview, setFilePreview] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showFileConfirmation, setShowFileConfirmation] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const handleAttachClick = ()=>{
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
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
        // Reset the input value so the same file can be selected again
        e.target.value = '';
    };
    const cancelFileSelection = ()=>{
        setSelectedFile(null);
        setFilePreview(null);
        setShowFileConfirmation(false);
        setUploadProgress(0);
    };
    const sendFileMessage = async (input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat = false)=>{
        if (!selectedFile || !chatId || !user || !recipientEmail) return;
        setIsUploading(true);
        setSendingError(null);
        try {
            // Skip blocking check for self-chat
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    setIsUploading(false);
                    return;
                }
            }
            // Upload to Cloudinary with progress tracking
            const fileURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["uploadToCloudinary"])(selectedFile, (progress)=>{
                setUploadProgress(progress);
            });
            // Update user's last seen
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            // Build message data
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: input || "",
                user: user.email,
                photoURL: user.photoURL,
                fileURL: fileURL,
                fileName: selectedFile.name,
                fileType: selectedFile.type,
                fileSize: selectedFile.size,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT
            };
            // Add reply data if replying
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            // Send the message
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
        fileInputRef,
        handleAttachClick,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
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
    const sendVoiceMessage = async (replyingTo, setSendingError, setReplyingTo, scrollToBottom, isSelfChat = false)=>{
        if (!audioBlob || !chatId || !user || !recipientEmail) return;
        setIsUploading(true);
        setSendingError(null);
        try {
            // Skip blocking check for self-chat
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    setIsUploading(false);
                    return;
                }
            }
            // Upload to Cloudinary with progress tracking
            const voiceURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["uploadToCloudinary"])(audioBlob, (progress)=>{
                setUploadProgress(progress);
            });
            // Update user's last seen
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            // Build message data
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: "",
                user: user.email,
                photoURL: user.photoURL,
                voiceURL: voiceURL,
                voiceDuration: recordingTime,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT
            };
            // Add reply data if replying
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            // Send the message
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            // Reset states
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
"[project]/components/ChatScreen/hooks/useCamera.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useCamera.js
__turbopack_context__.s([
    "useCamera",
    ()=>useCamera
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cloudinary.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
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
;
const useCamera = (chatId, user, recipientEmail)=>{
    const [showCamera, setShowCamera] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [capturedImage, setCapturedImage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [capturedImageBlob, setCapturedImageBlob] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [stream, setStream] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const startCamera = async ()=>{
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "user",
                    width: {
                        ideal: 1280
                    },
                    height: {
                        ideal: 720
                    }
                },
                audio: false
            });
            setStream(mediaStream);
            setShowCamera(true);
            // Wait for video element to be available
            setTimeout(()=>{
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            }, 100);
        } catch (error) {
            console.error("Error accessing camera:", error);
            alert("Unable to access camera. Please check permissions.");
        }
    };
    const capturePhoto = ()=>{
        if (videoRef.current) {
            const canvas = document.createElement("canvas");
            const video = videoRef.current;
            // Set canvas dimensions to match video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            // Convert canvas to blob with high quality
            canvas.toBlob((blob)=>{
                if (blob) {
                    console.log("📸 Photo captured:", {
                        size: blob.size,
                        type: blob.type,
                        width: canvas.width,
                        height: canvas.height
                    });
                    // Create preview URL
                    const previewUrl = URL.createObjectURL(blob);
                    setCapturedImage(previewUrl);
                    setCapturedImageBlob(blob);
                    stopCamera();
                } else {
                    console.error("Failed to create blob from canvas");
                    alert("Failed to capture photo. Please try again.");
                }
            }, "image/jpeg", 0.95);
        }
    };
    const stopCamera = ()=>{
        if (stream) {
            stream.getTracks().forEach((track)=>track.stop());
            setStream(null);
        }
        setShowCamera(false);
    };
    const retakePhoto = ()=>{
        if (capturedImage) {
            URL.revokeObjectURL(capturedImage);
        }
        setCapturedImage(null);
        setCapturedImageBlob(null);
        startCamera();
    };
    const cancelPhoto = ()=>{
        if (capturedImage) {
            URL.revokeObjectURL(capturedImage);
        }
        setCapturedImage(null);
        setCapturedImageBlob(null);
        stopCamera();
        setUploadProgress(0);
    };
    const sendPhoto = async (input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat = false)=>{
        if (!capturedImageBlob || !chatId || !user || !recipientEmail) {
            console.error("Missing required data for sending photo");
            return;
        }
        setIsUploading(true);
        setSendingError(null);
        try {
            console.log("📤 Starting photo upload...");
            // Skip blocking check for self-chat
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    setIsUploading(false);
                    return;
                }
            }
            // Convert blob to file with proper metadata
            const timestamp = Date.now();
            const fileName = `camera_photo_${timestamp}.jpg`;
            const file = new File([
                capturedImageBlob
            ], fileName, {
                type: "image/jpeg",
                lastModified: timestamp
            });
            console.log("📸 Photo file created:", {
                name: file.name,
                size: file.size,
                type: file.type
            });
            // Upload to Cloudinary
            const fileURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["uploadToCloudinary"])(file, (progress)=>{
                console.log(`⬆️ Upload progress: ${progress}%`);
                setUploadProgress(progress);
            });
            console.log("✅ Upload complete, URL:", fileURL);
            // Update user's last seen
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            // Build message data
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: input || "",
                user: user.email,
                photoURL: user.photoURL,
                fileURL: fileURL,
                fileName: fileName,
                fileType: "image/jpeg",
                fileSize: capturedImageBlob.size,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT
            };
            // Add reply data if replying
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            console.log("💾 Saving message to Firestore:", messageData);
            // Send the message
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            console.log("✅ Message saved successfully");
            // Clean up
            if (capturedImage) {
                URL.revokeObjectURL(capturedImage);
            }
            // Reset states
            setInput("");
            setCapturedImage(null);
            setCapturedImageBlob(null);
            setUploadProgress(0);
            setReplyingTo(null);
            scrollToBottom();
        } catch (error) {
            console.error("❌ Error sending photo:", error);
            setSendingError(`Failed to send photo: ${error.message}`);
        } finally{
            setIsUploading(false);
        }
    };
    return {
        showCamera,
        capturedImage,
        uploadProgress,
        isUploading,
        videoRef,
        startCamera,
        capturePhoto,
        retakePhoto,
        cancelPhoto,
        sendPhoto
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useLocation.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useLocation.js
__turbopack_context__.s([
    "useLocation",
    ()=>useLocation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
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
const useLocation = (chatId, user, recipientEmail)=>{
    const [isGettingLocation, setIsGettingLocation] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [showLocationPreview, setShowLocationPreview] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [locationData, setLocationData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const getLocation = ()=>{
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }
        setIsGettingLocation(true);
        setShowLocationPreview(true);
        navigator.geolocation.getCurrentPosition((position)=>{
            const { latitude, longitude } = position.coords;
            setLocationData({
                latitude,
                longitude,
                url: `https://www.google.com/maps?q=${latitude},${longitude}`
            });
            setIsGettingLocation(false);
        }, (error)=>{
            console.error("Error getting location:", error);
            let errorMessage = "Unable to retrieve your location.";
            switch(error.code){
                case error.PERMISSION_DENIED:
                    errorMessage = "Location permission denied. Please enable location access in your browser settings.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "Location request timed out.";
                    break;
            }
            alert(errorMessage);
            setIsGettingLocation(false);
            setShowLocationPreview(false);
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    };
    const cancelLocation = ()=>{
        setLocationData(null);
        setShowLocationPreview(false);
        setIsGettingLocation(false);
    };
    const sendLocation = async (input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat = false)=>{
        if (!locationData || !chatId || !user || !recipientEmail) {
            console.error("Missing required data for sending location");
            return;
        }
        setSendingError(null);
        try {
            // Skip blocking check for self-chat
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    return;
                }
            }
            // Update user's last seen
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            // Build message data
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: input || "📍 Shared Location",
                user: user.email,
                photoURL: user.photoURL,
                location: {
                    latitude: locationData.latitude,
                    longitude: locationData.longitude,
                    url: locationData.url
                },
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT
            };
            // Add reply data if replying
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            console.log("📍 Sending location message:", messageData);
            // Send the message
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            // Reset states
            setInput("");
            setLocationData(null);
            setShowLocationPreview(false);
            setReplyingTo(null);
            scrollToBottom();
            console.log("✅ Location message sent successfully");
        } catch (error) {
            console.error("Error sending location:", error);
            setSendingError(`Failed to send location: ${error.message}`);
        }
    };
    return {
        isGettingLocation,
        showLocationPreview,
        locationData,
        getLocation,
        cancelLocation,
        sendLocation
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/usePolls.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/usePolls.js
__turbopack_context__.s([
    "usePolls",
    ()=>usePolls
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
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
const usePolls = (chatId, user, recipientEmail)=>{
    const [showPollDialog, setShowPollDialog] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [pollQuestion, setPollQuestion] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [pollOptions, setPollOptions] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([
        "",
        ""
    ]);
    const [allowMultipleAnswers, setAllowMultipleAnswers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isSendingPoll, setIsSendingPoll] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const openPollDialog = ()=>{
        setShowPollDialog(true);
        setPollQuestion("");
        setPollOptions([
            "",
            ""
        ]);
        setAllowMultipleAnswers(false);
    };
    const closePollDialog = ()=>{
        setShowPollDialog(false);
        setPollQuestion("");
        setPollOptions([
            "",
            ""
        ]);
        setAllowMultipleAnswers(false);
    };
    const handleOptionChange = (index, value)=>{
        const newOptions = [
            ...pollOptions
        ];
        newOptions[index] = value;
        setPollOptions(newOptions);
        // Add new blank option if last two options are filled
        if (index === pollOptions.length - 1 && index >= 1) {
            const lastTwoFilled = newOptions[index] && newOptions[index - 1];
            if (lastTwoFilled && pollOptions.length < 10) {
                setPollOptions([
                    ...newOptions,
                    ""
                ]);
            }
        }
    };
    const removeOption = (index)=>{
        if (pollOptions.length > 2) {
            const newOptions = pollOptions.filter((_, i)=>i !== index);
            setPollOptions(newOptions);
        }
    };
    const sendPoll = async (replyingTo, setSendingError, setReplyingTo, scrollToBottom, isSelfChat)=>{
        if (!chatId || !user || !recipientEmail) {
            console.error("Missing required data for sending poll");
            return;
        }
        if (!pollQuestion.trim()) {
            setSendingError("Please enter a question for the poll");
            return;
        }
        const validOptions = pollOptions.filter((opt)=>opt.trim());
        if (validOptions.length < 2) {
            setSendingError("Please provide at least 2 options");
            return;
        }
        try {
            setIsSendingPoll(true);
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user.");
                    return;
                }
            }
            const pollData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                user: user.email,
                photoURL: user.photoURL,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT,
                poll: {
                    question: pollQuestion.trim(),
                    options: validOptions.map((opt)=>({
                            text: opt,
                            votes: []
                        })),
                    allowMultipleAnswers,
                    createdBy: user.email
                }
            };
            if (replyingTo) {
                pollData.replyTo = {
                    id: replyingTo.id,
                    user: replyingTo.user,
                    message: replyingTo.message,
                    timestamp: replyingTo.timestamp
                };
            }
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), pollData);
            closePollDialog();
            if (setReplyingTo) setReplyingTo(null);
            scrollToBottom();
        } catch (error) {
            console.error("Error sending poll:", error);
            setSendingError("Failed to send poll. Please try again.");
        } finally{
            setIsSendingPoll(false);
        }
    };
    return {
        showPollDialog,
        pollQuestion,
        setPollQuestion,
        pollOptions,
        allowMultipleAnswers,
        setAllowMultipleAnswers,
        isSendingPoll,
        openPollDialog,
        closePollDialog,
        handleOptionChange,
        removeOption,
        sendPoll
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

// components/ChatScreen/hooks/useRecipientData.js
__turbopack_context__.s([
    "useRecipientData",
    ()=>useRecipientData
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const useRecipientData = (user, chat)=>{
    // ✅ Return early with null values if data is not ready
    if (!user || !chat || !chat.users || chat.users.length === 0) {
        console.log("⏳ useRecipientData: Waiting for chat data...", {
            hasUser: !!user,
            hasChat: !!chat,
            hasUsers: !!chat?.users,
            usersLength: chat?.users?.length
        });
        return {
            recipientEmail: null,
            recipient: null,
            recipientSnapshot: null,
            isSelfChat: false,
            isLoading: true
        };
    }
    // ✅ Memoize recipient calculation to prevent unnecessary recalculations
    const recipientData = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        // ✅ Clean the users array first
        const cleanUsers = [
            ...new Set(chat.users.filter(Boolean))
        ];
        console.log("🔍 useRecipientData: Processing chat", {
            originalUsers: chat.users,
            cleanUsers: cleanUsers,
            currentUser: user.email
        });
        // Normalize emails for comparison
        const normalizedUserEmail = user.email.toLowerCase();
        const normalizedUsers = cleanUsers.map((email)=>email?.toLowerCase()).filter(Boolean);
        // Check if this is a self-chat (all users are the same person)
        // components/ChatScreen/hooks/useRecipientData.js (in the useMemo)
        // Check if this is a self-chat
        const isSelfChat = // Single user that matches current user
        normalizedUsers.length === 1 && normalizedUsers[0] === normalizedUserEmail || normalizedUsers.length === 2 && normalizedUsers.every((email)=>email === normalizedUserEmail);
        console.log("🔍 useRecipientData: Self-chat check", {
            normalizedUsers,
            normalizedUserEmail,
            isSelfChat
        });
        // Handle self-chat case - use current user's email
        if (isSelfChat) {
            console.log("💬 useRecipientData: Self-chat detected - recipient is yourself");
            return {
                recipientEmail: user.email,
                isSelfChat: true
            };
        }
        // Find the OTHER user (not the current user)
        const recipientEmail = cleanUsers.find((userEmail)=>userEmail && userEmail.toLowerCase() !== normalizedUserEmail);
        // ✅ IMPORTANT: If we can't find a recipient, DON'T fallback to user.email
        if (!recipientEmail) {
            console.error("❌ useRecipientData: Could not find recipient in chat.users", {
                cleanUsers,
                currentUser: user.email
            });
            return {
                recipientEmail: null,
                isSelfChat: false
            };
        }
        console.log("✅ useRecipientData: Found recipient", {
            recipient: recipientEmail,
            currentUser: user.email,
            isSelfChat: false
        });
        return {
            recipientEmail,
            isSelfChat: false
        };
    }, [
        chat.users,
        user.email
    ]);
    // ✅ Only query Firestore if we have a valid recipient email
    const recipientQuery = recipientData.recipientEmail ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientData.recipientEmail)) : null;
    const [recipientSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(recipientQuery);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    return {
        recipientEmail: recipientData.recipientEmail,
        recipient: recipient || {
            email: recipientData.recipientEmail,
            photoURL: recipientData.isSelfChat ? user.photoURL : null
        },
        recipientSnapshot,
        isSelfChat: recipientData.isSelfChat,
        isLoading: false
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
"[project]/components/ChatScreen/utils/messageStatus.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/utils/messageStatus.js
__turbopack_context__.s([
    "isRecipientOnline",
    ()=>isRecipientOnline,
    "markMessageAsDelivered",
    ()=>markMessageAsDelivered,
    "markMessageAsRead",
    ()=>markMessageAsRead,
    "markRecipientMessagesAsDelivered",
    ()=>markRecipientMessagesAsDelivered,
    "markRecipientMessagesAsRead",
    ()=>markRecipientMessagesAsRead,
    "markUserMessagesAsDelivered",
    ()=>markUserMessagesAsDelivered,
    "markUserMessagesAsRead",
    ()=>markUserMessagesAsRead,
    "markYourMessagesAsDelivered",
    ()=>markYourMessagesAsDelivered,
    "markYourMessagesAsRead",
    ()=>markYourMessagesAsRead,
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
/**
 * Verify that a chat actually involves the specified users
 * ✅ FIXED: Uses 'users' field to match your database structure
 */ const verifyChatParticipants = async (chatId, userEmail1, userEmail2)=>{
    try {
        if (!chatId) {
            console.error(`❌ verifyChatParticipants: chatId is missing`);
            return false;
        }
        const chatRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId);
        const chatSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(chatRef);
        if (!chatSnap.exists()) {
            console.error(`❌ [Chat: ${chatId}] Chat does not exist`);
            return false;
        }
        const chatData = chatSnap.data();
        // ✅ FIX: Use 'users' field (your actual database structure)
        const participants = chatData.users || chatData.participants || [];
        console.log(`🔍 [Chat: ${chatId}] Verifying participants:`, {
            chatUsers: participants,
            checkingUser1: userEmail1,
            checkingUser2: userEmail2,
            chatDataFields: Object.keys(chatData)
        });
        if (!Array.isArray(participants)) {
            console.error(`❌ [Chat: ${chatId}] 'users' field is not an array:`, typeof participants, participants);
            return false;
        }
        if (participants.length === 0) {
            console.error(`❌ [Chat: ${chatId}] No users in chat`);
            return false;
        }
        // Check if both users are participants
        const hasUser1 = participants.includes(userEmail1);
        const hasUser2 = !userEmail2 || participants.includes(userEmail2);
        if (!hasUser1) {
            console.error(`❌ [Chat: ${chatId}] User1 (${userEmail1}) NOT in chat. Chat users: [${participants.join(', ')}]`);
            return false;
        }
        if (!hasUser2) {
            console.error(`❌ [Chat: ${chatId}] User2 (${userEmail2}) NOT in chat. Chat users: [${participants.join(', ')}]`);
            return false;
        }
        console.log(`✅ [Chat: ${chatId}] Participants verified: Both ${userEmail1} and ${userEmail2} are in chat`);
        return true;
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error verifying chat participants:`, error);
        return false;
    }
};
/**
 * Verify message belongs to the specific chat
 */ const verifyMessageInChat = (messageDoc, expectedChatId)=>{
    const messagePath = messageDoc.ref.path;
    const pathParts = messagePath.split('/');
    // Path should be: chats/{chatId}/messages/{messageId}
    if (pathParts.length >= 4 && pathParts[0] === 'chats' && pathParts[2] === 'messages') {
        const actualChatId = pathParts[1];
        if (actualChatId !== expectedChatId) {
            console.error(`❌ Message ${messageDoc.id} belongs to chat ${actualChatId}, not ${expectedChatId}`);
            return false;
        }
        return true;
    }
    console.error(`❌ Invalid message path: ${messagePath}`);
    return false;
};
const markMessageAsDelivered = async (chatId, messageId)=>{
    try {
        if (!chatId || !messageId) {
            console.error(`❌ markMessageAsDelivered: Missing chatId or messageId`, {
                chatId,
                messageId
            });
            return;
        }
        const messageRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId);
        // Verify message exists in this specific chat
        const messageSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(messageRef);
        if (!messageSnap.exists()) {
            console.error(`❌ [Chat: ${chatId}] Message ${messageId} not found`);
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(messageRef, {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
            deliveredAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
        });
        console.log(`✅ [Chat: ${chatId}] Message ${messageId} marked as DELIVERED`);
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error marking message as delivered:`, error);
    }
};
const markMessageAsRead = async (chatId, messageId)=>{
    try {
        if (!chatId || !messageId) {
            console.error(`❌ markMessageAsRead: Missing chatId or messageId`, {
                chatId,
                messageId
            });
            return;
        }
        const messageRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId);
        // Verify message exists in this specific chat
        const messageSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(messageRef);
        if (!messageSnap.exists()) {
            console.error(`❌ [Chat: ${chatId}] Message ${messageId} not found`);
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(messageRef, {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
            readAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
        });
        console.log(`✅ [Chat: ${chatId}] Message ${messageId} marked as READ`);
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error marking message as read:`, error);
    }
};
const isRecipientOnline = async (recipientEmail)=>{
    try {
        if (!recipientEmail) {
            console.log(`❓ isRecipientOnline: No recipientEmail provided`);
            return false;
        }
        const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        if (snapshot.empty) {
            console.log(`❓ Recipient ${recipientEmail} not found in users`);
            return false;
        }
        const recipientData = snapshot.docs[0].data();
        const lastSeen = recipientData.lastSeen?.toDate?.() || new Date(recipientData.lastSeen);
        const now = new Date();
        const secondsAgo = (now - lastSeen) / 1000;
        const isOnline = secondsAgo < 30;
        if (isOnline) {
            console.log(`🟢 Recipient ${recipientEmail} IS online (last seen ${Math.round(secondsAgo)}s ago)`);
        } else {
            console.log(`🔴 Recipient ${recipientEmail} OFFLINE (last seen ${Math.round(secondsAgo)}s ago)`);
        }
        return isOnline;
    } catch (error) {
        console.error("❌ Error checking recipient online status:", error);
        return false;
    }
};
const markYourMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail)=>{
    try {
        if (!chatId || !currentUserEmail) {
            console.error(`❌ markYourMessagesAsDelivered: Missing required params`, {
                chatId,
                currentUserEmail,
                recipientEmail
            });
            return;
        }
        console.log(`🔍 [Chat: ${chatId}] Attempting to mark YOUR messages as DELIVERED`);
        console.log(`   Current User: ${currentUserEmail}, Recipient: ${recipientEmail}`);
        // ✅ CRITICAL: Verify this is the correct chat BEFORE querying messages
        const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
        if (!isValidChat) {
            console.error(`❌ [Chat: ${chatId}] Chat validation failed - ABORTING message status update`);
            return;
        }
        // Check if recipient is actually online
        const online = await isRecipientOnline(recipientEmail);
        if (!online && recipientEmail) {
            console.log(`⏳ [Chat: ${chatId}] NOT marking YOUR messages as DELIVERED - recipient is offline`);
            return;
        }
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", currentUserEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        if (snapshot.empty) {
            console.log(`✓ [Chat: ${chatId}] No SENT messages from you to mark as DELIVERED`);
            return;
        }
        console.log(`📋 [Chat: ${chatId}] Found ${snapshot.docs.length} messages to update`);
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        let updateCount = 0;
        snapshot.docs.forEach((document)=>{
            // Double-check message belongs to this chat
            if (!verifyMessageInChat(document, chatId)) {
                console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
                return;
            }
            const msgData = document.data();
            console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
                deliveredAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            });
            updateCount++;
        });
        if (updateCount === 0) {
            console.log(`⚠️ [Chat: ${chatId}] No valid messages to update after verification`);
            return;
        }
        await batch.commit();
        console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} of YOUR messages as DELIVERED`);
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error marking YOUR messages as delivered:`, error);
    }
};
const markRecipientMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail = null)=>{
    try {
        if (!chatId || !recipientEmail) {
            console.error(`❌ markRecipientMessagesAsDelivered: Missing required params`, {
                chatId,
                recipientEmail,
                currentUserEmail
            });
            return;
        }
        console.log(`🔍 [Chat: ${chatId}] Attempting to mark RECIPIENT messages as DELIVERED`);
        console.log(`   Recipient: ${recipientEmail}, Current User: ${currentUserEmail}`);
        // ✅ CRITICAL: Verify this is the correct chat
        if (currentUserEmail) {
            const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
            if (!isValidChat) {
                console.error(`❌ [Chat: ${chatId}] Chat validation failed - ABORTING`);
                return;
            }
        }
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        if (snapshot.empty) {
            console.log(`✓ [Chat: ${chatId}] No SENT messages from recipient to mark as DELIVERED`);
            return;
        }
        console.log(`📋 [Chat: ${chatId}] Found ${snapshot.docs.length} messages to update`);
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        let updateCount = 0;
        snapshot.docs.forEach((document)=>{
            if (!verifyMessageInChat(document, chatId)) {
                console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
                return;
            }
            const msgData = document.data();
            console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
                deliveredAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            });
            updateCount++;
        });
        if (updateCount === 0) {
            console.log(`⚠️ [Chat: ${chatId}] No valid messages to update after verification`);
            return;
        }
        await batch.commit();
        console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} messages from recipient as DELIVERED`);
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error marking recipient messages as delivered:`, error);
    }
};
const markRecipientMessagesAsRead = async (chatId, recipientEmail, currentUserEmail = null)=>{
    try {
        if (!chatId || !recipientEmail) {
            console.error(`❌ markRecipientMessagesAsRead: Missing required params`, {
                chatId,
                recipientEmail,
                currentUserEmail
            });
            return;
        }
        console.log(`🔍 [Chat: ${chatId}] Attempting to mark RECIPIENT messages as READ`);
        console.log(`   Recipient: ${recipientEmail}, Current User: ${currentUserEmail}`);
        // ✅ CRITICAL: Verify this is the correct chat
        if (currentUserEmail) {
            const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
            if (!isValidChat) {
                console.error(`❌ [Chat: ${chatId}] Chat validation failed - ABORTING`);
                return;
            }
        }
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        // Get all messages that are not yet read
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
        if (allDocs.length === 0) {
            console.log(`✓ [Chat: ${chatId}] No unread messages from recipient to mark as READ`);
            return;
        }
        console.log(`📋 [Chat: ${chatId}] Found ${allDocs.length} messages to update`);
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        let updateCount = 0;
        allDocs.forEach((document)=>{
            if (!verifyMessageInChat(document, chatId)) {
                console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
                return;
            }
            const msgData = document.data();
            console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
                readAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            });
            updateCount++;
        });
        if (updateCount === 0) {
            console.log(`⚠️ [Chat: ${chatId}] No valid messages to update after verification`);
            return;
        }
        await batch.commit();
        console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} messages from recipient as READ`);
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error marking recipient messages as read:`, error);
    }
};
const markYourMessagesAsRead = async (chatId, currentUserEmail, recipientEmail = null)=>{
    try {
        if (!chatId || !currentUserEmail) {
            console.error(`❌ markYourMessagesAsRead: Missing required params`, {
                chatId,
                currentUserEmail,
                recipientEmail
            });
            return;
        }
        console.log(`🔍 [Chat: ${chatId}] Attempting to mark YOUR messages as READ`);
        console.log(`   Current User: ${currentUserEmail}, Recipient: ${recipientEmail}`);
        // ✅ CRITICAL: Verify this is the correct chat
        if (recipientEmail) {
            const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
            if (!isValidChat) {
                console.error(`❌ [Chat: ${chatId}] Chat validation failed - ABORTING`);
                return;
            }
        }
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        const sentQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", currentUserEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const deliveredQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", currentUserEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED));
        const [sentSnapshot, deliveredSnapshot] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(sentQuery),
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(deliveredQuery)
        ]);
        const allDocs = [
            ...sentSnapshot.docs,
            ...deliveredSnapshot.docs
        ];
        if (allDocs.length === 0) {
            console.log(`✓ [Chat: ${chatId}] No unread messages from you to update`);
            return;
        }
        console.log(`📋 [Chat: ${chatId}] Found ${allDocs.length} messages to update`);
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        let updateCount = 0;
        allDocs.forEach((document)=>{
            if (!verifyMessageInChat(document, chatId)) {
                console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
                return;
            }
            const msgData = document.data();
            console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
                readAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            });
            updateCount++;
        });
        if (updateCount === 0) {
            console.log(`⚠️ [Chat: ${chatId}] No valid messages to update after verification`);
            return;
        }
        await batch.commit();
        console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} of YOUR messages as READ`);
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error marking YOUR messages as read:`, error);
    }
};
const markUserMessagesAsDelivered = markRecipientMessagesAsDelivered;
const markUserMessagesAsRead = markRecipientMessagesAsRead;
const subscribeToRecipientStatus = (recipientEmail, onStatusChange)=>{
    if (!recipientEmail) {
        console.error(`❌ subscribeToRecipientStatus: Missing recipientEmail`);
        return ()=>{}; // Return empty unsubscribe function
    }
    const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
    const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail));
    const unsubscribe = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(q, (snapshot)=>{
        if (!snapshot.empty) {
            const recipientData = snapshot.docs[0].data();
            console.log(`👁️ Recipient ${recipientEmail} status:`, {
                lastSeen: recipientData.lastSeen?.toDate?.() || recipientData.lastSeen
            });
            onStatusChange(recipientData);
        }
    }, (error)=>{
        console.error("❌ Error subscribing to recipient status:", error);
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
    "default",
    ()=>__TURBOPACK__default__export__,
    "useMessageStatus",
    ()=>useMessageStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils/messageStatus.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Check.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/DoneAll.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AccessTime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Error$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Error.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const MessageStatus = ({ status, darkMode })=>{
    const getStatusIcon = ()=>{
        switch(status){
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENDING:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: darkMode ? '#8696a0' : '#667781'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 22,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: darkMode ? '#8696a0' : '#667781'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 25,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: darkMode ? '#8696a0' : '#667781'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 28,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: '#53bdeb'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 31,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)); // Blue checkmarks
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].FAILED:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Error$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: '#f44336'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 34,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: darkMode ? '#8696a0' : '#667781'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 37,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: 4
        },
        children: getStatusIcon()
    }, void 0, false, {
        fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MessageStatus;
const useMessageStatus = (chatId, recipientEmail, currentUserEmail, isSelfChat = false)=>{
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const selfChatTimeoutRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null); // ✅ NEW: Track timeout
    // ✅ NEW: Check if all required data is ready
    const isReady = !!(chatId && user && recipientEmail && currentUserEmail);
    // ✅ Mark YOUR messages as DELIVERED when recipient comes online
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // ✅ CRITICAL: Don't run if data is not ready
        if (!isReady) {
            console.log(`⏳ [Chat: ${chatId}] Waiting for data before setting up online listener...`);
            return;
        }
        if (isSelfChat) {
            console.log(`⏭️ [Chat: ${chatId}] Skipping YOUR DELIVERED update - self-chat`);
            return;
        }
        // Sanity check: Don't monitor yourself
        if (currentUserEmail === recipientEmail) {
            console.warn(`⚠️ [Chat: ${chatId}] Skipping online listener - userEmail matches recipientEmail`);
            return;
        }
        console.log(`👁️ [Chat: ${chatId}] Listening for ${recipientEmail} to come online...`);
        console.log(`   Your messages from: ${currentUserEmail}`);
        // ✅ CRITICAL: Capture current values to avoid stale closures
        const currentChatId = chatId;
        const currentRecipient = recipientEmail;
        const currentUser = currentUserEmail;
        // Set up real-time listener for recipient's online status
        const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", currentRecipient));
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(q, async (snapshot)=>{
            // ✅ Prevent running if chat has changed (stale listener)
            if (chatId !== currentChatId) {
                console.log(`⚠️ [OLD Chat: ${currentChatId}] Ignoring stale listener callback - current chat is ${chatId}`);
                return;
            }
            if (snapshot.empty) {
                console.log(`❓ [Chat: ${currentChatId}] Recipient ${currentRecipient} not found in users collection`);
                return;
            }
            const recipientData = snapshot.docs[0].data();
            const lastSeen = recipientData.lastSeen?.toDate?.() || new Date(recipientData.lastSeen);
            const now = new Date();
            const secondsAgo = (now - lastSeen) / 1000;
            if (secondsAgo < 30) {
                console.log(`🟢 [Chat: ${currentChatId}] RECIPIENT CAME ONLINE! (${Math.round(secondsAgo)}s ago)`);
                console.log(`   Updating YOUR messages from ${currentUser} to DELIVERED`);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["markYourMessagesAsDelivered"])(currentChatId, currentRecipient, currentUser);
            } else {
                console.log(`🔴 [Chat: ${currentChatId}] Recipient offline (${Math.round(secondsAgo)}s ago)`);
            }
        }, (error)=>{
            console.error(`❌ [Chat: ${currentChatId}] Error listening to recipient status:`, error);
        });
        return ()=>{
            console.log(`🔌 [Chat: ${currentChatId}] Stopping recipient status listener for ${currentRecipient}`);
            unsubscribe();
        };
    }, [
        chatId,
        recipientEmail,
        currentUserEmail,
        isSelfChat,
        isReady
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useDisplayName.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useDisplayName.js
__turbopack_context__.s([
    "useDisplayName",
    ()=>useDisplayName
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
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
const useDisplayName = (userId, recipientEmail)=>{
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!userId || !recipientEmail) {
            setLoading(false);
            return;
        }
        console.log(`👀 Watching display name for: users/${userId}/contacts/${recipientEmail}`);
        const contactRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", userId, "contacts", recipientEmail);
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(contactRef, (snapshot)=>{
            if (snapshot.exists()) {
                const customName = snapshot.data().displayName;
                console.log(`✅ Display name found:`, customName);
                setDisplayName(customName);
            } else {
                console.log(`ℹ️ No custom display name set`);
                setDisplayName(null);
            }
            setLoading(false);
        }, (error)=>{
            console.error("❌ Error fetching display name:", error);
            setDisplayName(null);
            setLoading(false);
        });
        return ()=>{
            console.log(`🔌 Unsubscribing from display name listener`);
            unsubscribe();
        };
    }, [
        userId,
        recipientEmail
    ]);
    return {
        displayName,
        loading
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/timeago-react [external] (timeago-react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timeago-react", () => require("timeago-react"));

module.exports = mod;
}),
"[project]/components/ChatScreen/components/ChatHeader.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/ChatHeader.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/MoreVert.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Menu.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/timeago-react [external] (timeago-react, cjs)");
;
;
;
;
;
;
;
function ChatHeader({ recipient, recipientEmail, recipientSnapshot, isSelfChat, customDisplayName, onMoreClick, darkMode, isMobile, onToggleSidebar }) {
    const getHeaderTitle = ()=>{
        if (isSelfChat) {
            return `${recipientEmail} (You)`;
        }
        // Use custom display name if available
        if (customDisplayName) {
            return customDisplayName;
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
                        lineNumber: 39,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true);
        }
        return "Loading...";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Header, {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HeaderLeft, {
                children: [
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onToggleSidebar,
                        style: {
                            marginRight: '10px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            style: {
                                color: darkMode ? 'gray' : 'inherit'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    recipient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                        src: recipientSnapshot?.docs?.[0]?.data()?.photoURL
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                        children: recipientEmail?.[0]?.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HeaderInformation, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: getHeaderTitle()
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: getStatusText()
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HeaderActions, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    onClick: onMoreClick,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        style: {
                            color: darkMode ? 'gray' : 'inherit'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatHeader;
// Styled Components remain the same...
const Header = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: sticky;
  background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "white"};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${(props)=>props.darkMode ? "#333" : "whitesmoke"};
  justify-content: space-between;
`;
const HeaderLeft = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
`;
const UserAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"])`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`;
const HeaderInformation = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-left: 15px;
  flex: 1;
  min-width: 0;

  > h3 {
    margin: 0;
    margin-bottom: 3px;
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    font-size: 13px;
    color: ${(props)=>props.darkMode ? "#888" : "gray"};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    margin-left: 10px;

    > h3 {
      font-size: 15px;
    }

    > p {
      font-size: 12px;
    }
  }
`;
const HeaderActions = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
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
"[project]/components/Message.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Message.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/moment [external] (moment, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemIcon/ListItemIcon.js [ssr] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.js [ssr] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Download.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/InsertDriveFile.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$VideoLibrary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/VideoLibrary.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Audiotrack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Audiotrack.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/MoreVert.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Delete.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Reply$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Reply.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$LocationOn$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/LocationOn.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$OpenInNew$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/OpenInNew.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Poll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Poll.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CheckCircle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/CheckCircle.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$RadioButtonUnchecked$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/RadioButtonUnchecked.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CheckBoxOutlineBlank$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/CheckBoxOutlineBlank.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CheckBox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/CheckBox.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/MessageStatus.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
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
function Message({ user, message, messageId, onDelete, onReply }) {
    const [userLoggedIn] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [votingInProgress, setVotingInProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    const TypeOfMessage = user === userLoggedIn?.email ? Sender : Receiver;
    const isOwnMessage = user === userLoggedIn?.email;
    // Helper function to convert poll options to array
    const getPollOptionsArray = (poll)=>{
        if (!poll || !poll.options) return [];
        return Array.isArray(poll.options) ? poll.options : Object.values(poll.options);
    };
    // Check if message is less than 1 hour old
    const isRecentMessage = ()=>{
        if (!message.timestamp) return false;
        const messageTime = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(message.timestamp);
        const now = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])();
        const hoursDiff = now.diff(messageTime, 'hours');
        return hoursDiff < 1;
    };
    // Open menu
    const handleMenuOpen = (event)=>{
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    // Close menu
    const handleMenuClose = ()=>{
        setAnchorEl(null);
    };
    // Handle delete
    const handleDelete = ()=>{
        handleMenuClose();
        if (onDelete && messageId) {
            onDelete(messageId);
        }
    };
    // Handle reply
    const handleReply = ()=>{
        handleMenuClose();
        if (onReply) {
            onReply({
                id: messageId,
                user: user,
                message: message.message || (message.poll ? `📊 ${message.poll.question}` : ''),
                timestamp: message.timestamp,
                fileURL: message.fileURL,
                fileName: message.fileName,
                fileType: message.fileType,
                voiceURL: message.voiceURL,
                voiceDuration: message.voiceDuration,
                location: message.location,
                poll: message.poll
            });
        }
    };
    // Handle poll vote
    const handlePollVote = async (optionIndex)=>{
        if (!messageId || votingInProgress || !router.query.id || !message.poll) return;
        setVotingInProgress(true);
        try {
            console.log('🗳️ Attempting to vote on poll:', {
                chatId: router.query.id,
                messageId,
                optionIndex,
                userEmail: userLoggedIn.email
            });
            // Convert poll options to array
            const pollOptions = getPollOptionsArray(message.poll);
            if (!pollOptions[optionIndex]) {
                console.error('Invalid option index');
                return;
            }
            const messageRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", router.query.id, "messages", messageId);
            const currentVotes = Array.isArray(pollOptions[optionIndex].votes) ? pollOptions[optionIndex].votes : [];
            const hasVoted = currentVotes.includes(userLoggedIn.email);
            console.log('Current vote status:', {
                currentVotes,
                hasVoted
            });
            // For single answer polls, remove votes from all options first
            if (!message.poll.allowMultipleAnswers && !hasVoted) {
                const updates = {};
                pollOptions.forEach((option, idx)=>{
                    const votes = Array.isArray(option.votes) ? option.votes : [];
                    if (votes.includes(userLoggedIn.email)) {
                        updates[`poll.options.${idx}.votes`] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayRemove"])(userLoggedIn.email);
                    }
                });
                if (Object.keys(updates).length > 0) {
                    console.log('Removing previous votes:', updates);
                    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(messageRef, updates);
                }
            }
            // Toggle vote for the selected option
            const voteUpdate = {
                [`poll.options.${optionIndex}.votes`]: hasVoted ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayRemove"])(userLoggedIn.email) : (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayUnion"])(userLoggedIn.email)
            };
            console.log('Applying vote update:', voteUpdate);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(messageRef, voteUpdate);
            console.log('✅ Vote successful!');
        } catch (error) {
            console.error("❌ Error voting on poll:", error);
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
            alert(`Failed to vote: ${error.message}`);
        } finally{
            setVotingInProgress(false);
        }
    };
    // Optimize Cloudinary image URLs with transformations
    const getOptimizedImageUrl = (url)=>{
        if (!url || !url.includes('cloudinary.com')) return url;
        const transformation = '/w_600,h_600,c_limit,f_auto,q_auto';
        return url.replace('/upload/', `/upload${transformation}/`);
    };
    // Get thumbnail for video
    const getVideoThumbnail = (url)=>{
        if (!url || !url.includes('cloudinary.com')) return null;
        const transformation = '/w_600,h_400,c_fill,f_jpg,q_auto';
        return url.replace('/upload/', `/upload${transformation}/`).replace(/\.[^.]+$/, '.jpg');
    };
    // Download file function with better Cloudinary support
    const downloadFile = async (url, fileName)=>{
        try {
            let downloadUrl = url;
            if (url.includes('cloudinary.com')) {
                downloadUrl = url.replace('/upload/', '/upload/fl_attachment/');
            }
            const response = await fetch(downloadUrl);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = fileName || "download";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(()=>window.URL.revokeObjectURL(blobUrl), 100);
        } catch (error) {
            console.error("Download failed:", error);
            window.open(url, '_blank');
        }
    };
    // Format file size
    const formatFileSize = (bytes)=>{
        if (!bytes || bytes === 0) return "Unknown size";
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
    // Format voice duration
    const formatDuration = (seconds)=>{
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    // Get file type icon and color
    const getFileIcon = (fileType)=>{
        if (!fileType) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: darkMode ? '#64b5f6' : '#1976d2'
        };
        if (fileType.includes('pdf')) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: '#d32f2f'
        };
        if (fileType.includes('word') || fileType.includes('document')) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: '#2196f3'
        };
        if (fileType.includes('sheet') || fileType.includes('excel')) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: '#4caf50'
        };
        if (fileType.includes('zip') || fileType.includes('rar')) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: '#ff9800'
        };
        return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: darkMode ? '#64b5f6' : '#1976d2'
        };
    };
    const fileIconData = getFileIcon(message.fileType);
    const FileIconComponent = fileIconData.icon;
    const showDelete = isRecentMessage();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TypeOfMessage, {
            darkMode: darkMode,
            isSender: isOwnMessage,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageContent, {
                    children: [
                        message.replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyPreview, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyBar, {
                                    isSender: isOwnMessage
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyContent, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyUser, {
                                            darkMode: darkMode,
                                            children: message.replyTo.user === userLoggedIn?.email ? 'You' : message.replyTo.user
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyText, {
                                            darkMode: darkMode,
                                            children: message.replyTo.location ? '📍 Location' : message.replyTo.poll ? `📊 ${message.replyTo.poll.question || 'Poll'}` : message.replyTo.message || message.replyTo.fileName || '🎤 Voice message'
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        message.poll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollContainer, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollHeader, {
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Poll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                fontSize: 20,
                                                marginRight: 8
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 263,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollQuestion, {
                                            children: message.poll.question
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 264,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 262,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollOptions, {
                                    children: (()=>{
                                        // Convert poll.options to array if it's an object
                                        const pollOptions = getPollOptionsArray(message.poll);
                                        return pollOptions.map((option, index)=>{
                                            // Ensure option has required structure
                                            if (!option || typeof option !== 'object') {
                                                return null;
                                            }
                                            const optionText = option.text || '';
                                            const optionVotes = Array.isArray(option.votes) ? option.votes : [];
                                            // Calculate vote statistics
                                            const totalVotes = pollOptions.reduce((sum, opt)=>{
                                                const votes = Array.isArray(opt?.votes) ? opt.votes : [];
                                                return sum + votes.length;
                                            }, 0);
                                            const optionVotesCount = optionVotes.length;
                                            const percentage = totalVotes > 0 ? optionVotesCount / totalVotes * 100 : 0;
                                            const hasVoted = optionVotes.includes(userLoggedIn?.email);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollOption, {
                                                onClick: ()=>handlePollVote(index),
                                                darkMode: darkMode,
                                                hasVoted: hasVoted,
                                                disabled: votingInProgress,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollOptionContent, {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollOptionIcon, {
                                                                children: message.poll.allowMultipleAnswers ? hasVoted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CheckBox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    style: {
                                                                        color: darkMode ? "#00a884" : "#25d366",
                                                                        fontSize: 20
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Message.js",
                                                                    lineNumber: 303,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CheckBoxOutlineBlank$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    style: {
                                                                        color: darkMode ? "#8696a0" : "#667781",
                                                                        fontSize: 20
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Message.js",
                                                                    lineNumber: 310,
                                                                    columnNumber: 23
                                                                }, this) : hasVoted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CheckCircle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    style: {
                                                                        color: darkMode ? "#00a884" : "#25d366",
                                                                        fontSize: 20
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Message.js",
                                                                    lineNumber: 319,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$RadioButtonUnchecked$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    style: {
                                                                        color: darkMode ? "#8696a0" : "#667781",
                                                                        fontSize: 20
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Message.js",
                                                                    lineNumber: 326,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Message.js",
                                                                lineNumber: 300,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollOptionText, {
                                                                darkMode: darkMode,
                                                                hasVoted: hasVoted,
                                                                children: optionText
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Message.js",
                                                                lineNumber: 336,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollOptionVotes, {
                                                                darkMode: darkMode,
                                                                children: optionVotesCount
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Message.js",
                                                                lineNumber: 341,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Message.js",
                                                        lineNumber: 299,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollProgressBar, {
                                                        darkMode: darkMode,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollProgressFill, {
                                                            percentage: percentage,
                                                            darkMode: darkMode,
                                                            hasVoted: hasVoted
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Message.js",
                                                            lineNumber: 348,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Message.js",
                                                        lineNumber: 347,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/Message.js",
                                                lineNumber: 292,
                                                columnNumber: 13
                                            }, this);
                                        }).filter(Boolean); // Remove null entries
                                    })()
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 267,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollFooter, {
                                    darkMode: darkMode,
                                    children: [
                                        message.poll.allowMultipleAnswers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollInfo, {
                                            children: "Multiple answers allowed"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 362,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PollTotalVotes, {
                                            darkMode: darkMode,
                                            children: (()=>{
                                                const pollOptions = getPollOptionsArray(message.poll);
                                                const totalVotes = pollOptions.reduce((sum, opt)=>{
                                                    const votes = Array.isArray(opt?.votes) ? opt.votes : [];
                                                    return sum + votes.length;
                                                }, 0);
                                                return `${totalVotes} ${totalVotes === 1 ? 'vote' : 'votes'}`;
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 364,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 360,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 261,
                            columnNumber: 3
                        }, this),
                        message.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LocationContainer, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MapPreview, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MapFrame, {
                                        src: `https://www.openstreetmap.org/export/embed.html?bbox=${message.location.longitude - 0.005},${message.location.latitude - 0.005},${message.location.longitude + 0.005},${message.location.latitude + 0.005}&layer=mapnik&marker=${message.location.latitude},${message.location.longitude}`,
                                        title: "Location",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Message.js",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LocationInfo, {
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LocationIcon, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$LocationOn$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                style: {
                                                    fontSize: 20,
                                                    color: "#f44336"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Message.js",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Coordinates, {
                                            darkMode: darkMode,
                                            children: [
                                                message.location.latitude.toFixed(6),
                                                ", ",
                                                message.location.longitude.toFixed(6)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ViewButton, {
                                    href: message.location.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$OpenInNew$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                fontSize: 16,
                                                marginRight: 4
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        "View on Maps"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this),
                        message.fileURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileAttachment, {
                            children: [
                                message.fileType?.startsWith("image/") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImageContainer, {
                                    children: [
                                        !imageLoaded && !imageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImagePlaceholder, {
                                            darkMode: darkMode,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                style: {
                                                    fontSize: 48,
                                                    color: darkMode ? '#555' : '#ccc'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Message.js",
                                                lineNumber: 418,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 417,
                                            columnNumber: 21
                                        }, this),
                                        imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImageError, {
                                            darkMode: darkMode,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    style: {
                                                        fontSize: 48,
                                                        color: darkMode ? '#666' : '#999'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 423,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    children: "Failed to load image"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 424,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 422,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImagePreview, {
                                            src: getOptimizedImageUrl(message.fileURL),
                                            alt: message.fileName || "Image",
                                            onClick: ()=>window.open(message.fileURL, "_blank"),
                                            onLoad: ()=>setImageLoaded(true),
                                            onError: ()=>setImageError(true),
                                            loading: "lazy",
                                            style: {
                                                display: imageLoaded ? 'block' : 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 427,
                                            columnNumber: 21
                                        }, this),
                                        message.fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImageFileName, {
                                            darkMode: darkMode,
                                            children: message.fileName
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 438,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 415,
                                    columnNumber: 17
                                }, this) : message.fileType?.startsWith("video/") ? /* Video Preview */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VideoContainer, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VideoPreview, {
                                            controls: true,
                                            preload: "metadata",
                                            poster: getVideoThumbnail(message.fileURL),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                                                    src: message.fileURL,
                                                    type: message.fileType
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this),
                                                "Your browser does not support the video tag."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 444,
                                            columnNumber: 19
                                        }, this),
                                        message.fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VideoFileName, {
                                            darkMode: darkMode,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$VideoLibrary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    style: {
                                                        fontSize: 16,
                                                        marginRight: 4
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 454,
                                                    columnNumber: 23
                                                }, this),
                                                message.fileName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 453,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 443,
                                    columnNumber: 17
                                }, this) : message.fileType?.startsWith("audio/") && !message.voiceURL ? /* Audio File (not voice message) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileContainer, {
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileHeader, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Audiotrack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    style: {
                                                        fontSize: 32,
                                                        color: darkMode ? '#64b5f6' : '#1976d2'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 463,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileInfo, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileName, {
                                                            darkMode: darkMode,
                                                            children: message.fileName || "Audio File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Message.js",
                                                            lineNumber: 465,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileSize, {
                                                            darkMode: darkMode,
                                                            children: formatFileSize(message.fileSize)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Message.js",
                                                            lineNumber: 468,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 464,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioPlayer, {
                                            controls: true,
                                            src: message.fileURL,
                                            darkMode: darkMode,
                                            children: "Your browser does not support the audio element."
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 473,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 461,
                                    columnNumber: 17
                                }, this) : /* Other Files (PDF, Documents, etc.) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileInfo, {
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileIconComponent, {
                                            style: {
                                                fontSize: 40,
                                                color: fileIconData.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 480,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileDetails, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileName, {
                                                    darkMode: darkMode,
                                                    children: message.fileName || "File"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 482,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileSize, {
                                                    darkMode: darkMode,
                                                    children: formatFileSize(message.fileSize)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 483,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 481,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 479,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DownloadButton, {
                                    onClick: ()=>downloadFile(message.fileURL, message.fileName),
                                    size: "small",
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: 5,
                                                fontSize: 12
                                            },
                                            children: "Download"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 412,
                            columnNumber: 13
                        }, this),
                        message.voiceURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VoiceMessageContainer, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VoiceLabel, {
                                    darkMode: darkMode,
                                    children: "🎤 Voice Message"
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioPlayer, {
                                    controls: true,
                                    src: message.voiceURL,
                                    darkMode: darkMode,
                                    children: "Your browser does not support the audio element."
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this),
                                message.voiceDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VoiceDuration, {
                                    darkMode: darkMode,
                                    children: [
                                        "Duration: ",
                                        formatDuration(message.voiceDuration)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 510,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 504,
                            columnNumber: 13
                        }, this),
                        message.message && message.message.trim() && !message.location && !message.poll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageText, {
                            darkMode: darkMode,
                            children: message.message
                        }, void 0, false, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 519,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageFooter, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Timestamp, {
                                    darkMode: darkMode,
                                    children: message.timestamp ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(message.timestamp).format("LT") : "..."
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this),
                                isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    status: message.status || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT,
                                    darkMode: darkMode
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 528,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 523,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Message.js",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageActions, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageMenuButton, {
                        onClick: handleMenuOpen,
                        size: "small",
                        darkMode: darkMode,
                        isSender: isOwnMessage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            style: {
                                color: darkMode ? 'gray' : 'inherit'
                            },
                            fontSize: "small"
                        }, void 0, false, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 544,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Message.js",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Message.js",
                    lineNumber: 537,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            onClick: handleReply,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Reply$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small",
                                        style: {
                                            color: darkMode ? '#64b5f6' : '#1976d2'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Message.js",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                    style: {
                                        color: darkMode ? '#e0e0e0' : 'black'
                                    },
                                    children: "Reply"
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 560,
                            columnNumber: 11
                        }, this),
                        showDelete && isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            onClick: handleDelete,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small",
                                        style: {
                                            color: '#d32f2f'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Message.js",
                                        lineNumber: 572,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                    style: {
                                        color: darkMode ? '#e0e0e0' : 'black'
                                    },
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 574,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 570,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Message.js",
                    lineNumber: 549,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Message.js",
            lineNumber: 238,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Message.js",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Message;
// Styled Components remain the same...
// [All the styled components from your original code stay exactly the same]
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin: 5px 0;
  
  &:hover {
    ${(props)=>`
      ${MessageActions} {
        opacity: 1;
      }
    `}
  }
`;
const MessageElement = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: fit-content;
  max-width: 65%;
  padding: 10px 15px;
  padding-top: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 8px;
  position: relative;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
const Sender = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(MessageElement)`
  margin-left: auto;
  background-color: ${(props)=>props.darkMode ? '#056162' : '#dcf8c6'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  border-radius: 8px 8px 0 8px;
`;
const Receiver = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(MessageElement)`
  background-color: ${(props)=>props.darkMode ? '#1f2c33' : 'whitesmoke'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  text-align: left;
  border-radius: 8px 8px 8px 0;
  margin-left: 10px;
  margin-right: auto;
`;
const MessageContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  min-width: 0;
`;
const MessageActions = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;
  align-items: flex-start;
`;
const MessageMenuButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  opacity: 0.6 !important;
  padding: 4px !important;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : '#666'} !important;
  
  &:hover {
    opacity: 1 !important;
    background-color: ${(props)=>props.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} !important;
  }
`;
const MessageFooter = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 4px;
  padding-top: 2px;
`;
const ReplyPreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${(props)=>props.darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'};
  border-radius: 6px;
`;
const ReplyBar = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 4px;
  background-color: ${(props)=>props.isSender ? '#00a884' : '#1976d2'};
  border-radius: 2px;
  margin-right: 8px;
  flex-shrink: 0;
`;
const ReplyContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const ReplyUser = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  font-weight: 600;
  color: ${(props)=>props.darkMode ? '#64b5f6' : '#1976d2'};
  margin-bottom: 2px;
`;
const ReplyText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 13px;
  color: ${(props)=>props.darkMode ? '#aaa' : '#666'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MessageText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.4;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  white-space: pre-wrap;
`;
const Timestamp = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  color: ${(props)=>props.darkMode ? '#8696a0' : 'gray'};
  font-size: 11px;
  margin-left: 8px;
`;
const FileAttachment = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
// Poll Message Styles
const PollContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  background-color: ${(props)=>props.darkMode ? "#2a3942" : "#f0f0f0"};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  min-width: 300px;
  max-width: 400px;
`;
const PollHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: ${(props)=>props.darkMode ? "#64b5f6" : "#1976d2"};
`;
const PollQuestion = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};
  line-height: 1.4;
`;
const PollOptions = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
`;
const PollOption = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  background-color: ${(props)=>props.darkMode ? "#1f2c33" : "white"};
  border: 2px solid ${(props)=>{
    if (props.hasVoted) {
        return props.darkMode ? "#00a884" : "#25d366";
    }
    return props.darkMode ? "#3a4952" : "#e0e0e0";
}};
  border-radius: 8px;
  padding: 12px;
  cursor: ${(props)=>props.disabled ? "not-allowed" : "pointer"};
  transition: all 0.2s;
  opacity: ${(props)=>props.disabled ? 0.6 : 1};
  position: relative;

  &:hover {
    background-color: ${(props)=>props.disabled ? props.darkMode ? "#1f2c33" : "white" : props.darkMode ? "#2a3942" : "#f5f5f5"};
    transform: ${(props)=>props.disabled ? "none" : "translateX(2px)"};
  }

  &:active {
    transform: ${(props)=>props.disabled ? "none" : "scale(0.98)"};
  }
`;
const PollOptionContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`;
const PollOptionIcon = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const PollOptionText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  font-size: 14px;
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};
  font-weight: ${(props)=>props.hasVoted ? "600" : "400"};
  line-height: 1.4;
`;
const PollOptionVotes = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? "#8696a0" : "#667781"};
  font-weight: 500;
  flex-shrink: 0;
`;
const PollProgressBar = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 100%;
  height: 4px;
  background-color: ${(props)=>props.darkMode ? "#1a1a1a" : "#e0e0e0"};
  border-radius: 2px;
  overflow: hidden;
`;
const PollProgressFill = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  height: 100%;
  width: ${(props)=>props.percentage}%;
  background-color: ${(props)=>{
    if (props.hasVoted) {
        return props.darkMode ? "#00a884" : "#25d366";
    }
    return props.darkMode ? "#3a4952" : "#ccc";
}};
  transition: width 0.3s ease;
  border-radius: 2px;
`;
const PollFooter = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${(props)=>props.darkMode ? "#3a4952" : "#e0e0e0"};
`;
const PollInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 11px;
  color: ${(props)=>props.darkMode ? "#8696a0" : "#667781"};
  font-style: italic;
`;
const PollTotalVotes = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? "#8696a0" : "#667781"};
  font-weight: 500;
`;
// Location Message Styles
const LocationContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  max-width: 280px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f5f5f5"};
  margin-bottom: 8px;
`;
const MapPreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 100%;
  height: 200px;
  background: #f0f0f0;
  position: relative;
`;
const MapFrame = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].iframe`
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none;
`;
const LocationInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 8px;
`;
const LocationIcon = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
`;
const Coordinates = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 13px;
  color: ${(props)=>props.darkMode ? "#b0b0b0" : "#666"};
  font-family: monospace;
`;
const ViewButton = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props)=>props.darkMode ? "#128C7E" : "#25D366"};
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props)=>props.darkMode ? "#0d6b5f" : "#1fa855"};
  }
`;
// Image Styles
const ImageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props)=>props.darkMode ? '#1a1a1a' : '#f5f5f5'};
`;
const ImagePlaceholder = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#e0e0e0'};
`;
const ImageError = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f0f0f0'};
  
  p {
    margin-top: 10px;
    color: ${(props)=>props.darkMode ? '#888' : '#666'};
    font-size: 14px;
  }
`;
const ImagePreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].img`
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.95;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
const ImageFileName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 8px;
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#666'};
  background-color: ${(props)=>props.darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.9)'};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
// Video Styles
const VideoContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;
const VideoPreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].video`
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  background-color: #000;
`;
const VideoFileName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#666'};
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 6px;
  margin-top: 6px;
`;
// Audio File Styles
const AudioFileContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 12px;
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 280px;
`;
const AudioFileHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;
const AudioFileInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const AudioFileName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const AudioFileSize = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : 'gray'};
  margin-top: 2px;
`;
// General File Styles
const FileInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 220px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props)=>props.darkMode ? '#3a4952' : '#e8e8e8'};
  }
`;
const FileDetails = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const FileName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const FileSize = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : 'gray'};
  margin-top: 4px;
`;
const DownloadButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  display: flex !important;
  align-items: center !important;
  padding: 8px 14px !important;
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#e3f2fd'} !important;
  color: ${(props)=>props.darkMode ? '#64b5f6' : '#1976d2'} !important;
  border-radius: 6px !important;
  font-size: 12px !important;
  align-self: flex-start !important;
  transition: all 0.2s !important;

  &:hover {
    background-color: ${(props)=>props.darkMode ? '#3a4952' : '#bbdefb'} !important;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
// Voice Message Styles
const VoiceMessageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  padding: 12px;
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 280px;
`;
const VoiceLabel = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 13px;
  font-weight: 500;
  color: ${(props)=>props.darkMode ? '#64b5f6' : '#1976d2'};
  display: flex;
  align-items: center;
  gap: 6px;
`;
const AudioPlayer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].audio`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 6px;
  
  &::-webkit-media-controls-panel {
    background-color: ${(props)=>props.darkMode ? '#1f2c33' : 'white'};
    border-radius: 6px;
  }

  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-mute-button {
    filter: ${(props)=>props.darkMode ? 'invert(1)' : 'none'};
  }
`;
const VoiceDuration = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 11px;
  color: ${(props)=>props.darkMode ? '#8696a0' : 'gray'};
  text-align: right;
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Message.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const MessageList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ messagesSnapshot, messages, sendingError, onDelete, onReply, darkMode }, ref)=>{
    const showMessages = ()=>{
        if (messagesSnapshot) {
            return messagesSnapshot.docs.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            return messages ? JSON.parse(messages).map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
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

// components/ChatScreen/components/ChatInput.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertEmoticon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/InsertEmoticon.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Mic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Mic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Send.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Stop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Stop.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Add$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Add.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function ChatInput({ input, setInput, inputRef, isRecording, recordingTime, onSubmit, onEmojiClick, onPlusClick, onStartRecording, onStopRecording, darkMode }) {
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputContainer, {
        darkMode: darkMode,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Form, {
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PlusButton, {
                    onClick: onPlusClick,
                    darkMode: darkMode,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Add$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EmojiButton, {
                    onClick: onEmojiClick,
                    darkMode: darkMode,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertEmoticon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                    ref: inputRef,
                    value: input,
                    onChange: (e)=>setInput(e.target.value),
                    placeholder: "Type a message",
                    disabled: isRecording,
                    darkMode: darkMode
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecordingContainer, {
                    darkMode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecordingIndicator, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecordingDot, {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecordingTime, {
                                    children: formatTime(recordingTime)
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StopButton, {
                            onClick: onStopRecording,
                            darkMode: darkMode,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Stop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ButtonsContainer, {
                    children: input.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SendButton, {
                        type: "submit",
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 64,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 63,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MicButton, {
                        onClick: onStartRecording,
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Mic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 67,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatInput;
// Styled Components
const InputContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "white"};
  border-top: 1px solid ${(props)=>props.darkMode ? "#333" : "whitesmoke"};
  z-index: 100;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;
const Form = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].form`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;
const PlusButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: ${(props)=>props.darkMode ? "#b0b0b0" : "#919191"};
    padding: 8px;
    
    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }
  }
`;
const EmojiButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: ${(props)=>props.darkMode ? "#b0b0b0" : "#919191"};
    padding: 8px;
    
    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }
  }
`;
const Input = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 25px;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "whitesmoke"};
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};
  padding: 12px 20px;
  font-size: 15px;
  min-width: 0;

  &::placeholder {
    color: ${(props)=>props.darkMode ? "#888" : "#999"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;
const ButtonsContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const SendButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: ${(props)=>props.darkMode ? "#25D366" : "#128C7E"};
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(37, 211, 102, 0.1)" : "rgba(18, 140, 126, 0.1)"};
    }
  }
`;
const MicButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: ${(props)=>props.darkMode ? "#b0b0b0" : "#919191"};
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }
  }
`;
const RecordingContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f0f0f0"};
  border-radius: 25px;
  padding: 8px 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 8px;
    padding: 6px 10px;
  }
`;
const RecordingIndicator = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;
const RecordingDot = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f44336;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;
const RecordingTime = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "#333"};
  font-size: 14px;
  font-weight: 500;
  min-width: 40px;

  @media (max-width: 768px) {
    font-size: 13px;
    min-width: 35px;
  }
`;
const StopButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: #f44336;
    padding: 6px;

    @media (max-width: 768px) {
      padding: 4px;
    }

    &:hover {
      background-color: rgba(244, 67, 54, 0.1);
    }
  }
`;
}),
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
"[project]/components/ChatScreen/components/AttachMenu.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/AttachMenu.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemIcon/ListItemIcon.js [ssr] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.js [ssr] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AttachFile.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CameraAlt$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/CameraAlt.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$LocationOn$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/LocationOn.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Poll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Poll.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function AttachMenu({ anchorEl, open, onClose, onAttachFile, onTakePhoto, onShareLocation, onCreatePoll, darkMode }) {
    const handleMenuItemClick = (action)=>{
        action();
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledMenu, {
        anchorEl: anchorEl,
        open: open,
        onClose: onClose,
        darkMode: darkMode,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledMenuItem, {
                onClick: ()=>handleMenuItemClick(onAttachFile),
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small",
                            style: {
                                color: darkMode ? '#64b5f6' : '#1976d2'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                        primary: "Attach File"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledMenuItem, {
                onClick: ()=>handleMenuItemClick(onTakePhoto),
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CameraAlt$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small",
                            style: {
                                color: darkMode ? '#ec407a' : '#e91e63'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                        primary: "Take Photo"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledMenuItem, {
                onClick: ()=>handleMenuItemClick(onShareLocation),
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$LocationOn$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small",
                            style: {
                                color: darkMode ? '#66bb6a' : '#4caf50'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                        primary: "Share Location"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledMenuItem, {
                onClick: ()=>handleMenuItemClick(onCreatePoll),
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Poll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small",
                            style: {
                                color: darkMode ? '#ffa726' : '#ff9800'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                        primary: "Create Poll"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/AttachMenu.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = AttachMenu;
const StyledMenu = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"])`
  && {
    .MuiPaper-root {
      background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#fff"};
      color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      min-width: 200px;
    }
  }
`;
const StyledMenuItem = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"])`
  && {
    padding: 12px 16px;
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }

    .MuiListItemText-primary {
      font-size: 14px;
    }
  }
`;
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
"[project]/components/ChatScreen/components/CameraDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/CameraDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.js [ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/TextField/TextField.js [ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CameraAlt$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/CameraAlt.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Send.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Cancel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Cancel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Refresh$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Refresh.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function CameraDialog({ open, showCamera, capturedImage, videoRef, input, onInputChange, uploadProgress, isUploading, onCapture, onRetake, onCancel, onSend, darkMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledDialog, {
        open: open,
        onClose: !isUploading ? onCancel : undefined,
        maxWidth: "sm",
        fullWidth: true,
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    showCamera && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VideoContainer, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Video, {
                            ref: videoRef,
                            autoPlay: true,
                            playsInline: true,
                            muted: true
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    capturedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PreviewContainer, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PreviewImage, {
                                src: capturedImage,
                                alt: "Captured photo"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                placeholder: "Add a caption (optional)",
                                value: input,
                                onChange: (e)=>onInputChange(e.target.value),
                                variant: "outlined",
                                margin: "normal",
                                disabled: isUploading,
                                InputProps: {
                                    style: {
                                        color: darkMode ? "#e0e0e0" : "#000",
                                        backgroundColor: darkMode ? "#2a2a2a" : "#fff"
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ProgressContainer, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                        variant: "determinate",
                                        value: uploadProgress
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ProgressText, {
                                        darkMode: darkMode,
                                        children: [
                                            uploadProgress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: [
                    showCamera && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: onCancel,
                                color: "secondary",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Cancel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                    lineNumber: 71,
                                    columnNumber: 69
                                }, void 0),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: onCapture,
                                color: "primary",
                                variant: "contained",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CameraAlt$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                    lineNumber: 78,
                                    columnNumber: 26
                                }, void 0),
                                children: "Capture"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    capturedImage && !showCamera && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: onRetake,
                                color: "secondary",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Refresh$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                    lineNumber: 90,
                                    columnNumber: 26
                                }, void 0),
                                disabled: isUploading,
                                children: "Retake"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: onCancel,
                                color: "secondary",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Cancel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                    lineNumber: 98,
                                    columnNumber: 26
                                }, void 0),
                                disabled: isUploading,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: onSend,
                                color: "primary",
                                variant: "contained",
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                    lineNumber: 107,
                                    columnNumber: 26
                                }, void 0),
                                disabled: isUploading,
                                children: isUploading ? "Sending..." : "Send"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/CameraDialog.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CameraDialog;
const StyledDialog = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"])`
  .MuiDialog-paper {
    background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "#fff"};
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};
  }
`;
const VideoContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 100%;
  aspect-ratio: 4/3;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Video = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const PreviewContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 100%;
`;
const PreviewImage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #000;
`;
const ProgressContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;
const ProgressText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "#333"};
  font-weight: 500;
`;
}),
"[project]/components/ChatScreen/components/LocationPreviewDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/LocationPreviewDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/TextField/TextField.js [ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.js [ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Send.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Cancel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Cancel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$LocationOn$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/LocationOn.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$OpenInNew$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/OpenInNew.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function LocationPreviewDialog({ open, locationData, input, onInputChange, onCancel, onSend, isGettingLocation, darkMode }) {
    if (isGettingLocation) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledDialog, {
            open: open,
            onClose: onCancel,
            maxWidth: "sm",
            fullWidth: true,
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LoadingContainer, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LoadingText, {
                            darkMode: darkMode,
                            children: "Getting your location..."
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    if (!locationData) return null;
    const mapUrl = `https://www.openstreetmap.org/?mlat=${locationData.latitude}&mlon=${locationData.longitude}#map=15/${locationData.latitude}/${locationData.longitude}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledDialog, {
        open: open,
        onClose: onCancel,
        maxWidth: "sm",
        fullWidth: true,
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TitleContainer, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$LocationOn$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            style: {
                                color: "#f44336",
                                marginRight: "8px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        "Share Location"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MapContainer, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MapFrame, {
                            src: `https://www.openstreetmap.org/export/embed.html?bbox=${locationData.longitude - 0.01},${locationData.latitude - 0.01},${locationData.longitude + 0.01},${locationData.latitude + 0.01}&layer=mapnik&marker=${locationData.latitude},${locationData.longitude}`,
                            title: "Location preview"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LocationInfo, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InfoRow, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: "Latitude:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    locationData.latitude.toFixed(6)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InfoRow, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: "Longitude:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    locationData.longitude.toFixed(6)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ViewMapLink, {
                                href: mapUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                darkMode: darkMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$OpenInNew$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        style: {
                                            fontSize: 16,
                                            marginRight: 4
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    "View on OpenStreetMap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        fullWidth: true,
                        placeholder: "Add a message (optional)",
                        value: input,
                        onChange: (e)=>onInputChange(e.target.value),
                        variant: "outlined",
                        margin: "normal",
                        InputProps: {
                            style: {
                                color: darkMode ? "#e0e0e0" : "#000",
                                backgroundColor: darkMode ? "#2a2a2a" : "#fff"
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onCancel,
                        color: "secondary",
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Cancel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                            lineNumber: 84,
                            columnNumber: 65
                        }, void 0),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onSend,
                        color: "primary",
                        variant: "contained",
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                            lineNumber: 87,
                            columnNumber: 81
                        }, void 0),
                        children: "Send Location"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/LocationPreviewDialog.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LocationPreviewDialog;
const StyledDialog = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"])`
  .MuiDialog-paper {
    background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "#fff"};
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};
  }
`;
const TitleContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
`;
const LoadingContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 16px;
`;
const LoadingText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "#333"};
  font-size: 16px;
  margin: 0;
`;
const MapContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;
  margin-bottom: 16px;
`;
const MapFrame = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
const LocationInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 16px;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f5f5f5"};
  border-radius: 8px;
  font-size: 14px;
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "#333"};
`;
const InfoRow = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-bottom: 8px;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
`;
const ViewMapLink = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].a`
  display: inline-flex;
  align-items: center;
  margin-top: 12px;
  color: ${(props)=>props.darkMode ? "#4CAF50" : "#128C7E"};
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;
}),
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
"[project]/components/ChatScreen/components/ChatInfoDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/ChatInfoDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/TextField/TextField.js [ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Tabs/Tabs.js [ssr] (ecmascript) <export default as Tabs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Tab/Tab.js [ssr] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Edit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Edit.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Check.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Cancel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Cancel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Description$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Description.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Download.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$OpenInNew$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/OpenInNew.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/moment [external] (moment, cjs)");
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
function TabPanel({ children, value, index, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `tabpanel-${index}`,
        "aria-labelledby": `tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                p: 2
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
            lineNumber: 36,
            columnNumber: 27
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function ChatInfoDialog({ open, onClose, recipient, recipientEmail, isSelfChat, messages, onUpdateDisplayName, darkMode }) {
    const [isEditingName, setIsEditingName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [tabValue, setTabValue] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (recipient?.displayName) {
            setDisplayName(recipient.displayName);
        } else {
            setDisplayName(recipientEmail?.split("@")[0] || "");
        }
    }, [
        recipient,
        recipientEmail
    ]);
    const handleTabChange = (event, newValue)=>{
        setTabValue(newValue);
    };
    const handleSaveDisplayName = ()=>{
        if (displayName.trim() && onUpdateDisplayName) {
            onUpdateDisplayName(displayName.trim());
        }
        setIsEditingName(false);
    };
    const handleCancelEdit = ()=>{
        // Reset to original name
        if (recipient?.displayName) {
            setDisplayName(recipient.displayName);
        } else {
            setDisplayName(recipientEmail?.split("@")[0] || "");
        }
        setIsEditingName(false);
    };
    // Extract links from messages
    const extractLinks = ()=>{
        if (!messages) return [];
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const links = [];
        messages.forEach((msg)=>{
            if (msg.message) {
                const urls = msg.message.match(urlRegex);
                if (urls) {
                    urls.forEach((url)=>{
                        links.push({
                            id: msg.id,
                            url,
                            message: msg.message,
                            timestamp: msg.timestamp,
                            user: msg.user
                        });
                    });
                }
            }
        });
        return links.reverse();
    };
    // Extract media (images, videos, audio)
    const extractMedia = ()=>{
        if (!messages) return [];
        const media = [];
        messages.forEach((msg)=>{
            if (msg.fileURL && msg.fileType) {
                if (msg.fileType.startsWith("image/") || msg.fileType.startsWith("video/") || msg.fileType.startsWith("audio/")) {
                    media.push({
                        id: msg.id,
                        url: msg.fileURL,
                        fileName: msg.fileName,
                        fileType: msg.fileType,
                        fileSize: msg.fileSize,
                        timestamp: msg.timestamp,
                        user: msg.user
                    });
                }
            }
        });
        return media.reverse();
    };
    // Extract documents
    const extractDocuments = ()=>{
        if (!messages) return [];
        const docs = [];
        messages.forEach((msg)=>{
            if (msg.fileURL && msg.fileType) {
                if (!msg.fileType.startsWith("image/") && !msg.fileType.startsWith("video/") && !msg.fileType.startsWith("audio/")) {
                    docs.push({
                        id: msg.id,
                        url: msg.fileURL,
                        fileName: msg.fileName,
                        fileType: msg.fileType,
                        fileSize: msg.fileSize,
                        timestamp: msg.timestamp,
                        user: msg.user
                    });
                }
            }
        });
        return docs.reverse();
    };
    const links = extractLinks();
    const media = extractMedia();
    const documents = extractDocuments();
    const formatFileSize = (bytes)=>{
        if (!bytes) return "Unknown size";
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
    const downloadFile = async (url, fileName)=>{
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = fileName || "download";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(()=>window.URL.revokeObjectURL(blobUrl), 100);
        } catch (error) {
            console.error("Download failed:", error);
            window.open(url, "_blank");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledDialog, {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HeaderContainer, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            children: "Chat Info"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            onClick: onClose,
                            size: "small",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                style: {
                                    color: darkMode ? "#e0e0e0" : "#000"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ProfileSection, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LargeAvatar, {
                                src: recipient?.photoURL,
                                children: recipientEmail?.[0]?.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NameSection, {
                                children: isEditingName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NameEditContainer, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                                fullWidth: true,
                                                value: displayName,
                                                onChange: (e)=>setDisplayName(e.target.value),
                                                variant: "outlined",
                                                size: "medium",
                                                autoFocus: true,
                                                placeholder: "Enter display name",
                                                InputProps: {
                                                    style: {
                                                        color: darkMode ? "#e0e0e0" : "#000",
                                                        backgroundColor: darkMode ? "#2a2a2a" : "#fff"
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EditButtonsContainer, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    onClick: handleCancelEdit,
                                                    startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Cancel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 32
                                                    }, void 0),
                                                    variant: "outlined",
                                                    color: "secondary",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    onClick: handleSaveDisplayName,
                                                    startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                        lineNumber: 246,
                                                        columnNumber: 32
                                                    }, void 0),
                                                    variant: "contained",
                                                    color: "primary",
                                                    disabled: !displayName.trim(),
                                                    children: "Save"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DisplayNameText, {
                                            darkMode: darkMode,
                                            children: displayName || recipientEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EmailText, {
                                            darkMode: darkMode,
                                            children: recipientEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        !isSelfChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChangeNameButton, {
                                            onClick: ()=>setIsEditingName(true),
                                            startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Edit$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                lineNumber: 265,
                                                columnNumber: 32
                                            }, void 0),
                                            variant: "outlined",
                                            darkMode: darkMode,
                                            children: "Change Display Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledTabs, {
                        value: tabValue,
                        onChange: handleTabChange,
                        darkMode: darkMode,
                        variant: "fullWidth",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledTab, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                    lineNumber: 285,
                                    columnNumber: 19
                                }, void 0),
                                label: `Links (${links.length})`,
                                darkMode: darkMode
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledTab, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                    lineNumber: 290,
                                    columnNumber: 19
                                }, void 0),
                                label: `Media (${media.length})`,
                                darkMode: darkMode
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledTab, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Description$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                    lineNumber: 295,
                                    columnNumber: 19
                                }, void 0),
                                label: `Docs (${documents.length})`,
                                darkMode: darkMode
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TabPanel, {
                        value: tabValue,
                        index: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TabContent, {
                            darkMode: darkMode,
                            children: links.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EmptyState, {
                                darkMode: darkMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        style: {
                                            fontSize: 48,
                                            opacity: 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "No links shared yet"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this) : links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LinkItem, {
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                color: darkMode ? "#64b5f6" : "#1976d2",
                                                fontSize: 20
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 312,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LinkContent, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LinkUrl, {
                                                    href: link.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    darkMode: darkMode,
                                                    children: [
                                                        link.url,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$OpenInNew$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            style: {
                                                                fontSize: 14,
                                                                marginLeft: 4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                            lineNumber: 321,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 314,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LinkMeta, {
                                                    darkMode: darkMode,
                                                    children: [
                                                        link.user,
                                                        " • ",
                                                        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(link.timestamp).format("MMM D, YYYY")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `${link.id}-${index}`, true, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                    lineNumber: 311,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TabPanel, {
                        value: tabValue,
                        index: 1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TabContent, {
                            darkMode: darkMode,
                            children: media.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EmptyState, {
                                darkMode: darkMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        style: {
                                            fontSize: 48,
                                            opacity: 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "No media shared yet"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                        lineNumber: 339,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 337,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MediaGrid, {
                                children: media.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MediaItem, {
                                        darkMode: darkMode,
                                        children: [
                                            item.fileType.startsWith("image/") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MediaImage, {
                                                src: item.url,
                                                alt: item.fileName,
                                                onClick: ()=>window.open(item.url, "_blank")
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                lineNumber: 346,
                                                columnNumber: 23
                                            }, this) : item.fileType.startsWith("video/") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MediaVideo, {
                                                controls: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                                                    src: item.url,
                                                    type: item.fileType
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 353,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                lineNumber: 352,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioContainer, {
                                                darkMode: darkMode,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("audio", {
                                                    controls: true,
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                                                        src: item.url,
                                                        type: item.fileType
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 357,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                lineNumber: 356,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MediaInfo, {
                                                darkMode: darkMode,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MediaName, {
                                                        children: item.fileName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                        lineNumber: 363,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MediaMeta, {
                                                        darkMode: darkMode,
                                                        children: [
                                                            formatFileSize(item.fileSize),
                                                            " •",
                                                            " ",
                                                            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(item.timestamp).format("MMM D")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                        lineNumber: 364,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                lineNumber: 362,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DownloadIconButton, {
                                                onClick: ()=>downloadFile(item.url, item.fileName),
                                                size: "small",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 373,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                lineNumber: 369,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                        lineNumber: 344,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 342,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TabPanel, {
                        value: tabValue,
                        index: 2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TabContent, {
                            darkMode: darkMode,
                            children: documents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EmptyState, {
                                darkMode: darkMode,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Description$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        style: {
                                            fontSize: 48,
                                            opacity: 0.3
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                        lineNumber: 387,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "No documents shared yet"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                        lineNumber: 388,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                lineNumber: 386,
                                columnNumber: 15
                            }, this) : documents.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DocumentItem, {
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Description$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                color: darkMode ? "#64b5f6" : "#1976d2",
                                                fontSize: 32
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DocumentContent, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DocumentName, {
                                                    darkMode: darkMode,
                                                    children: doc.fileName
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 397,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DocumentMeta, {
                                                    darkMode: darkMode,
                                                    children: [
                                                        formatFileSize(doc.fileSize),
                                                        " • ",
                                                        doc.user,
                                                        " •",
                                                        " ",
                                                        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(doc.timestamp).format("MMM D, YYYY")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                    lineNumber: 398,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 396,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DownloadIconButton, {
                                            onClick: ()=>downloadFile(doc.url, doc.fileName),
                                            size: "small",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                fontSize: "small"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                                lineNumber: 407,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                            lineNumber: 403,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, doc.id, true, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                                    lineNumber: 392,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ChatInfoDialog.jsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatInfoDialog;
// Styled Components
const StyledDialog = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"])`
  .MuiDialog-paper {
    background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "#fff"};
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};
    min-height: 600px;
  }
`;
const HeaderContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfileSection = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${(props)=>props.darkMode ? "#333" : "#e0e0e0"};
`;
const LargeAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"])`
  && {
    width: 100px;
    height: 100px;
    font-size: 48px;
    margin-bottom: 16px;
  }
`;
const NameSection = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
const NameEditContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 100%;
  max-width: 400px;
`;
const EditButtonsContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;
const DisplayNameText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].h2`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};
  text-align: center;
`;
const EmailText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  color: ${(props)=>props.darkMode ? "#888" : "#666"};
  font-size: 14px;
`;
const ChangeNameButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"])`
  && {
    margin-top: 12px;
    color: ${(props)=>props.darkMode ? "#25D366" : "#128C7E"};
    border-color: ${(props)=>props.darkMode ? "#25D366" : "#128C7E"};
    text-transform: none;
    
    &:hover {
      border-color: ${(props)=>props.darkMode ? "#1fa855" : "#0d6b5f"};
      background-color: ${(props)=>props.darkMode ? "rgba(37, 211, 102, 0.1)" : "rgba(18, 140, 126, 0.1)"};
    }
  }
`;
const StyledTabs = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"])`
  && {
    margin-top: 16px;
    border-bottom: 1px solid ${(props)=>props.darkMode ? "#333" : "#e0e0e0"};

    .MuiTabs-indicator {
      background-color: ${(props)=>props.darkMode ? "#25D366" : "#128C7E"};
    }
  }
`;
const StyledTab = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"])`
  && {
    color: ${(props)=>props.darkMode ? "#888" : "#666"};
    text-transform: none;
    font-size: 13px;

    &.Mui-selected {
      color: ${(props)=>props.darkMode ? "#25D366" : "#128C7E"};
    }
  }
`;
const TabContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props)=>props.darkMode ? "#2a2a2a" : "#f1f1f1"};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props)=>props.darkMode ? "#555" : "#888"};
    border-radius: 4px;
  }
`;
const EmptyState = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: ${(props)=>props.darkMode ? "#666" : "#999"};

  p {
    margin-top: 16px;
    font-size: 16px;
  }
`;
const LinkItem = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f5f5f5"};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props)=>props.darkMode ? "#333" : "#e8e8e8"};
  }
`;
const LinkContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  min-width: 0;
`;
const LinkUrl = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].a`
  display: flex;
  align-items: center;
  color: ${(props)=>props.darkMode ? "#64b5f6" : "#1976d2"};
  text-decoration: none;
  font-size: 14px;
  word-break: break-all;
  margin-bottom: 4px;

  &:hover {
    text-decoration: underline;
  }
`;
const LinkMeta = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? "#888" : "#666"};
`;
const MediaGrid = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
`;
const MediaItem = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f5f5f5"};

  &:hover {
    .download-btn {
      opacity: 1;
    }
  }
`;
const MediaImage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
const MediaVideo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].video`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const AudioContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 12px;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f0f0f0"};
`;
const MediaInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 8px;
`;
const MediaName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MediaMeta = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 11px;
  color: ${(props)=>props.darkMode ? "#888" : "#666"};
  margin-top: 4px;
`;
const DocumentItem = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f5f5f5"};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props)=>props.darkMode ? "#333" : "#e8e8e8"};
  }
`;
const DocumentContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  min-width: 0;
`;
const DocumentName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;
const DocumentMeta = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? "#888" : "#666"};
`;
const DownloadIconButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
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
"[project]/components/ChatScreen/components/PollCreationDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/PollCreationDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/TextField/TextField.js [ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Switch/Switch.js [ssr] (ecmascript) <export default as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/FormControlLabel/FormControlLabel.js [ssr] (ecmascript) <export default as FormControlLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Delete.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Poll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Poll.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
function PollCreationDialog({ open, onClose, question, onQuestionChange, options, onOptionChange, onRemoveOption, allowMultipleAnswers, onAllowMultipleChange, onSend, isSending, darkMode }) {
    const validOptions = options.filter((opt)=>opt.trim());
    const canSend = question.trim() && validOptions.length >= 2 && !isSending;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledDialog, {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                darkMode: darkMode,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TitleContainer, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TitleWithIcon, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Poll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    style: {
                                        marginRight: 8,
                                        color: darkMode ? "#64b5f6" : "#1976d2"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                "Create Poll"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            onClick: onClose,
                            size: "small",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                style: {
                                    color: darkMode ? "#e0e0e0" : "inherit"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledDialogContent, {
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Section, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionLabel, {
                                darkMode: darkMode,
                                children: "Question"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledTextField, {
                                fullWidth: true,
                                placeholder: "Ask a question...",
                                value: question,
                                onChange: (e)=>onQuestionChange(e.target.value),
                                autoFocus: true,
                                darkMode: darkMode,
                                multiline: true,
                                maxRows: 3
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Section, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionLabel, {
                                darkMode: darkMode,
                                children: "Options"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OptionsContainer, {
                                children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OptionRow, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OptionNumber, {
                                                darkMode: darkMode,
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledTextField, {
                                                fullWidth: true,
                                                placeholder: `Option ${index + 1}`,
                                                value: option,
                                                onChange: (e)=>onOptionChange(index, e.target.value),
                                                darkMode: darkMode
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            options.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                onClick: ()=>onRemoveOption(index),
                                                size: "small",
                                                disabled: option.trim() === "" && index === options.length - 1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: "small",
                                                    style: {
                                                        color: darkMode ? "#d32f2f" : "#f44336"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HelperText, {
                                darkMode: darkMode,
                                children: validOptions.length < 2 ? "Add at least 2 options" : `${validOptions.length} options added`
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Section, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControlLabel$3e$__["FormControlLabel"], {
                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Switch$3e$__["Switch"], {
                                checked: allowMultipleAnswers,
                                onChange: (e)=>onAllowMultipleChange(e.target.checked),
                                color: "primary"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, void 0),
                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SwitchLabel, {
                                darkMode: darkMode,
                                children: "Allow multiple answers"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledDialogActions, {
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onClose,
                        disabled: isSending,
                        style: {
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SendButton, {
                        onClick: onSend,
                        disabled: !canSend,
                        variant: "contained",
                        darkMode: darkMode,
                        children: isSending ? "Sending..." : "Send Poll"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/PollCreationDialog.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = PollCreationDialog;
// Styled Components
const StyledDialog = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"])`
  .MuiDialog-paper {
    background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "white"};
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};
  }
`;
const TitleContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;
const TitleWithIcon = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};
`;
const StyledDialogContent = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"])`
  padding: 20px 24px !important;
  background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "white"};
`;
const StyledDialogActions = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"])`
  padding: 16px 24px !important;
  background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "white"};
  border-top: 1px solid ${(props)=>props.darkMode ? "#333" : "#e0e0e0"};
`;
const Section = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const SectionLabel = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${(props)=>props.darkMode ? "#b0b0b0" : "#666"};
`;
const StyledTextField = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"])`
  .MuiOutlinedInput-root {
    background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f5f5f5"};
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};

    & fieldset {
      border-color: ${(props)=>props.darkMode ? "#444" : "#e0e0e0"};
    }

    &:hover fieldset {
      border-color: ${(props)=>props.darkMode ? "#555" : "#ccc"};
    }

    &.Mui-focused fieldset {
      border-color: ${(props)=>props.darkMode ? "#64b5f6" : "#1976d2"};
    }
  }

  .MuiOutlinedInput-input {
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};

    &::placeholder {
      color: ${(props)=>props.darkMode ? "#777" : "#999"};
      opacity: 1;
    }
  }
`;
const OptionsContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const OptionRow = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const OptionNumber = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#e3f2fd"};
  color: ${(props)=>props.darkMode ? "#64b5f6" : "#1976d2"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
`;
const HelperText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? "#888" : "#666"};
  margin-top: 8px;
`;
const SwitchLabel = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 14px;
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};
`;
const SendButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"])`
  && {
    background-color: ${(props)=>props.darkMode ? "#00a884" : "#25d366"};
    color: white;

    &:hover {
      background-color: ${(props)=>props.darkMode ? "#008c6e" : "#1fa855"};
    }

    &:disabled {
      background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#e0e0e0"};
      color: ${(props)=>props.darkMode ? "#666" : "#999"};
    }
  }
`;
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useCamera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useCamera.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useLocation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useLocation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$usePolls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/usePolls.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useRecipientData.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useMessages.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useMessageStatus.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useDisplayName$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useDisplayName.js [ssr] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatHeader$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ChatHeader.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/MessageList.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInput$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ChatInput.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$EmojiPicker$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/EmojiPicker.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$AttachMenu$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/AttachMenu.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/FileUploadDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$CameraDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/CameraDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$LocationPreviewDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/LocationPreviewDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInfoDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ChatInfoDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ReplyPreview$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ReplyPreview.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$PollCreationDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/PollCreationDialog.jsx [ssr] (ecmascript)");
// Styled Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
// Utils
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useCamera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useLocation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$usePolls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useDisplayName$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useCamera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useLocation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$usePolls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useDisplayName$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
function ChatScreen({ chat, messages, isMobile = false, onToggleSidebar = ()=>{} }) {
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const endOfMessagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [sendingError, setSendingError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showProfile, setShowProfile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [attachMenuAnchor, setAttachMenuAnchor] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    const chatId = router?.query?.id || null;
    // Custom Hooks
    const { recipientEmail, recipient, recipientSnapshot, isSelfChat, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRecipientData"])(user, chat);
    const { messagesSnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useMessages"])(chatId);
    // Fetch custom display name
    const { displayName: customDisplayName, loading: displayNameLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useDisplayName$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useDisplayName"])(user?.uid, recipientEmail);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useMessageStatus"])(chatId, isLoading ? null : recipientEmail, user?.email, isSelfChat);
    const emojiPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useEmojiPicker$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useEmojiPicker"])();
    const fileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useFileUpload"])(chatId, user, recipientEmail);
    const voiceRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useVoiceRecording"])(chatId, user, recipientEmail);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useCamera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useCamera"])(chatId, user, recipientEmail);
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useLocation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useLocation"])(chatId, user, recipientEmail);
    const polls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$usePolls$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["usePolls"])(chatId, user, recipientEmail);
    // Debug logging
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (user) {
            console.log("🔍 Current authenticated user:", {
                uid: user.uid,
                email: user.email
            });
        }
    }, [
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        console.log("📛 Custom display name:", customDisplayName);
    }, [
        customDisplayName
    ]);
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
    // Handle attach menu
    const handlePlusClick = (event)=>{
        setAttachMenuAnchor(event.currentTarget);
    };
    const handleAttachMenuClose = ()=>{
        setAttachMenuAnchor(null);
    };
    // Handle display name update
    const handleUpdateDisplayName = async (newDisplayName)=>{
        if (!recipientEmail || isSelfChat || !user) {
            console.error("❌ Cannot update display name:", {
                recipientEmail,
                isSelfChat,
                hasUser: !!user
            });
            return;
        }
        try {
            console.log(`📝 Updating display name for ${recipientEmail} to "${newDisplayName}"`);
            console.log(`👤 Current user:`, {
                uid: user.uid,
                email: user.email
            });
            const contactRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid, "contacts", recipientEmail);
            console.log(`📍 Document path: users/${user.uid}/contacts/${recipientEmail}`);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(contactRef, {
                email: recipientEmail,
                displayName: newDisplayName,
                updatedAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            console.log("✅ Display name updated successfully");
            // Show success message
            setSendingError(null);
        } catch (error) {
            console.error("❌ Error updating display name:", error);
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
            setSendingError(`Failed to update display name: ${error.message}`);
        }
    };
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
            console.log(`🗑️ [Chat: ${chatId}] Deleting message ${messageId}`);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId));
            console.log(`✅ [Chat: ${chatId}] Message deleted successfully`);
        } catch (error) {
            console.error(`❌ [Chat: ${chatId}] Error deleting message:`, error);
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
        if (!input?.trim() || !chatId || !user || !recipientEmail) {
            console.warn("⚠️ Cannot send message - missing required data");
            return;
        }
        try {
            console.log(`📤 [Chat: ${chatId}] Preparing to send message to ${recipientEmail}`);
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    return;
                }
            }
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                email: user.email
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
            console.error(`❌ [Chat: ${chatId}] Error sending message:`, error);
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
                lineNumber: 292,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/index.jsx",
            lineNumber: 291,
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
                lineNumber: 302,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/index.jsx",
            lineNumber: 301,
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
                customDisplayName: customDisplayName,
                onMoreClick: ()=>setShowProfile(true),
                darkMode: darkMode,
                isMobile: isMobile,
                onToggleSidebar: onToggleSidebar
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                ref: fileUpload.fileInputRef,
                type: "file",
                hidden: true,
                onChange: fileUpload.handleFileSelect,
                accept: "*/*"
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 321,
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
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$AttachMenu$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                anchorEl: attachMenuAnchor,
                open: Boolean(attachMenuAnchor),
                onClose: handleAttachMenuClose,
                onAttachFile: fileUpload.handleAttachClick,
                onTakePhoto: camera.startCamera,
                onShareLocation: location.getLocation,
                onCreatePoll: polls.openPollDialog,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 339,
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
                lineNumber: 350,
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
                onSend: ()=>fileUpload.sendFileMessage(input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat),
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 363,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$CameraDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: camera.showCamera || camera.capturedImage !== null,
                showCamera: camera.showCamera,
                capturedImage: camera.capturedImage,
                videoRef: camera.videoRef,
                input: input,
                onInputChange: setInput,
                uploadProgress: camera.uploadProgress,
                isUploading: camera.isUploading,
                onCapture: camera.capturePhoto,
                onRetake: camera.retakePhoto,
                onCancel: camera.cancelPhoto,
                onSend: ()=>camera.sendPhoto(input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat),
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$LocationPreviewDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: location.showLocationPreview,
                locationData: location.locationData,
                input: input,
                onInputChange: setInput,
                onCancel: location.cancelLocation,
                onSend: ()=>location.sendLocation(input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat),
                isGettingLocation: location.isGettingLocation,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: voiceRecording.audioBlob !== null,
                audioBlob: voiceRecording.audioBlob,
                recordingTime: voiceRecording.recordingTime,
                uploadProgress: voiceRecording.uploadProgress,
                isUploading: voiceRecording.isUploading,
                onCancel: voiceRecording.cancelRecording,
                onSend: ()=>voiceRecording.sendVoiceMessage(replyingTo, setSendingError, setReplyingTo, scrollToBottom, isSelfChat),
                onError: setSendingError,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$PollCreationDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: polls.showPollDialog,
                onClose: polls.closePollDialog,
                question: polls.pollQuestion,
                onQuestionChange: polls.setPollQuestion,
                options: polls.pollOptions,
                onOptionChange: polls.handleOptionChange,
                onRemoveOption: polls.removeOption,
                allowMultipleAnswers: polls.allowMultipleAnswers,
                onAllowMultipleChange: polls.setAllowMultipleAnswers,
                onSend: ()=>polls.sendPoll(replyingTo, setSendingError, setReplyingTo, scrollToBottom, isSelfChat),
                isSending: polls.isSendingPoll,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInfoDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showProfile,
                onClose: ()=>setShowProfile(false),
                recipient: {
                    ...recipient,
                    displayName: customDisplayName
                },
                recipientEmail: recipientEmail,
                isSelfChat: isSelfChat,
                messages: messagesSnapshot?.docs.map((doc)=>({
                        id: doc.id,
                        ...doc.data(),
                        timestamp: doc.data().timestamp?.toDate?.() || doc.data().timestamp
                    })) || [],
                onUpdateDisplayName: handleUpdateDisplayName,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ReplyPreview$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                replyingTo: replyingTo,
                userEmail: user?.email,
                onCancel: cancelReply,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 481,
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
                onPlusClick: handlePlusClick,
                onStartRecording: ()=>voiceRecording.startRecording(setSendingError),
                onStopRecording: voiceRecording.stopRecording,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 488,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/index.jsx",
        lineNumber: 308,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__fa40830f._.js.map