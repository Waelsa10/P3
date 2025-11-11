import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const checkIfBlocked = async (currentUserEmail, recipientEmail) => {
  try {
    // Don't check blocking for self-chat
    if (currentUserEmail === recipientEmail) {
      return false;
    }

    // Check if current user is blocked by recipient
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", recipientEmail));
    const querySnapshot = await getDocs(q);

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

export const buildReplyData = (replyingTo) => {
  if (!replyingTo) return null;

  const replyData = {
    messageId: replyingTo.id,
    user: replyingTo.user,
    message: replyingTo.message,
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

export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
};

export const formatTime = (seconds) => {
  if (!seconds || seconds < 0) return "0:00";
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const getFileIcon = (fileType) => {
  if (fileType?.startsWith("image/")) return "🖼️";
  if (fileType?.startsWith("video/")) return "🎥";
  if (fileType?.startsWith("audio/")) return "🎵";
  if (fileType?.includes("pdf")) return "📄";
  if (fileType?.includes("word") || fileType?.includes("document")) return "📝";
  if (fileType?.includes("sheet") || fileType?.includes("excel")) return "📊";
  if (fileType?.includes("zip") || fileType?.includes("rar")) return "📦";
  return "📎";
};