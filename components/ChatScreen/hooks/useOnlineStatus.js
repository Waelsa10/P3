// components/ChatScreen/hooks/useOnlineStatus.js

import { useEffect, useRef } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";

// ✅ FIXED: Add default export
const useOnlineStatus = () => {
  const [user] = useAuthState(auth);
  const isUpdating = useRef(false);

  useEffect(() => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    const updateStatus = async (isOnline) => {
      if (isUpdating.current) return;
      isUpdating.current = true;

      try {
        await setDoc(
          userRef,
          {
            isOnline,
            lastSeen: serverTimestamp(),
          },
          { merge: true }
        );
        
        console.log(`${isOnline ? '🟢' : '🔴'} [${user.email}] Status updated: ${isOnline ? 'ONLINE' : 'OFFLINE'}`);
      } catch (err) {
        console.error("❌ Error updating online status:", err);
      } finally {
        setTimeout(() => {
          isUpdating.current = false;
        }, 1000);
      }
    };

    const setOnline = () => updateStatus(true);
    const setOffline = () => updateStatus(false);

    // Mark online immediately
    setOnline();

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log(`🔴 [${user.email}] Tab hidden - setting offline`);
        setOffline();
      } else {
        console.log(`🟢 [${user.email}] Tab visible - setting online`);
        setOnline();
      }
    };

    // Handle browser connection changes
    const handleOnline = () => {
      console.log(`🟢 [${user.email}] Internet connected - setting online`);
      setOnline();
    };
    
    const handleOffline = () => {
      console.log(`🔴 [${user.email}] Internet disconnected - setting offline`);
      setOffline();
    };

    // Handle window/tab closing
    const handleBeforeUnload = () => {
      // Use sendBeacon for reliable offline status on page unload
      const data = JSON.stringify({
        isOnline: false,
        lastSeen: new Date().toISOString(),
      });
      
      // This will work even if page is closing
      navigator.sendBeacon(
        `https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/users/${user.uid}`,
        data
      );
      
      setOffline();
    };

    // Add event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Update every 25 seconds while active
    const interval = setInterval(() => {
      if (!document.hidden && navigator.onLine) {
        setOnline();
      }
    }, 25000);

    // Cleanup
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      setOffline();
    };
  }, [user]);
};

// ✅ Both named and default export
export { useOnlineStatus };
export default useOnlineStatus;