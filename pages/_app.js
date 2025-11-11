import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, serverTimestamp, doc, setDoc } from "../firebase";
import Loading from "../components/Loading";
import Login from "./login";
import { DarkModeProvider } from "../components/DarkModeProvider";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      setDoc(
        userRef,
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
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