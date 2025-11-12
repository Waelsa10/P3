// components/ChatScreen/hooks/useDisplayName.js
import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

export const useDisplayName = (userId, recipientEmail) => {
  const [displayName, setDisplayName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId || !recipientEmail) {
      setLoading(false);
      return;
    }

    console.log(`👀 Watching display name for: users/${userId}/contacts/${recipientEmail}`);

    const contactRef = doc(db, "users", userId, "contacts", recipientEmail);
    
    const unsubscribe = onSnapshot(
      contactRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const customName = snapshot.data().displayName;
          console.log(`✅ Display name found:`, customName);
          setDisplayName(customName);
        } else {
          console.log(`ℹ️ No custom display name set`);
          setDisplayName(null);
        }
        setLoading(false);
      },
      (error) => {
        console.error("❌ Error fetching display name:", error);
        setDisplayName(null);
        setLoading(false);
      }
    );

    return () => {
      console.log(`🔌 Unsubscribing from display name listener`);
      unsubscribe();
    };
  }, [userId, recipientEmail]);

  return { displayName, loading };
};