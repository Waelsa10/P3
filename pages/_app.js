// pages/_app.jsx

import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { 
  doc, 
  setDoc, 
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  writeBatch
} from "firebase/firestore";
import Loading from "../components/Loading";
import Login from "./login";
import { DarkModeProvider } from "../components/DarkModeProvider";
import { MESSAGE_STATUS } from "../components/ChatScreen/constants";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    const updateUserStatus = async () => {
      try {
        // ✅ ONLY update lastSeen - NO message status updates
        await setDoc(
          userRef,
          {
            email: user.email,
            lastSeen: serverTimestamp(),
            photoURL: user.photoURL || null,
          },
          { merge: true }
        );
        
        console.log(`✅ Updated lastSeen for ${user.email}`);
      } catch (error) {
        console.error("❌ Error updating lastSeen:", error);
      }
    };

    // Initial update
    updateUserStatus();

    // Update every 20 seconds
    const interval = setInterval(updateUserStatus, 20000);

    // Update on window focus
    window.addEventListener("focus", updateUserStatus);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", updateUserStatus);
    };
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;