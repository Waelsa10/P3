// components/ChatScreen/hooks/useOnlineStatus.js

import { useEffect } from "react";
import { doc, setDoc, serverTimestamp, onDisconnect } from "firebase/firestore";
import { db } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

export const useOnlineStatus = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    // Set user as online
    const setOnline = async () => {
      await setDoc(
        userRef,
        {
          isOnline: true,
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );
    };

    // Set user as offline
    const setOffline = async () => {
      await setDoc(
        userRef,
        {
          isOnline: false,
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );
    };

    setOnline();

    // Set offline on window close
    window.addEventListener("beforeunload", setOffline);

    // Set offline on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setOffline();
      } else {
        setOnline();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      setOffline();
      window.removeEventListener("beforeunload", setOffline);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [user]);
};