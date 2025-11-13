// pages/_app.jsx
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Loading from "../components/Loading";
import Login from "./login";
import { DarkModeProvider } from "../components/DarkModeProvider";
import { useOnlineStatus } from "../components/ChatScreen/hooks/useOnlineStatus";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  // ✅ Use the online status hook (handles isOnline field)
  useOnlineStatus();

  // ✅ ALSO update email and photoURL periodically
  useEffect(() => {
    if (!user) return;
    
    const userRef = doc(db, "users", user.uid);

    const updateUserData = async () => {
      try {
        await setDoc(
          userRef,
          {
            email: user.email,
            photoURL: user.photoURL || null,
            // Don't update lastSeen or isOnline here - useOnlineStatus handles it
          },
          { merge: true }
        );
      } catch (error) {
        console.error("❌ Error updating user data:", error);
      }
    };

    // Initial update
    updateUserData();

    // Update email/photo every 5 minutes (in case they change)
    const interval = setInterval(updateUserData, 300000);
    
    return () => {
      clearInterval(interval);
    };
  }, [user]);
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  
  if (loading) return <Loading />;
  if (!user) return <Login />;
  
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;