'use client'

import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useAuthSession() {
  const [authState, setAuthState] = useState(false);
  const [userProfileInfo, setUserProfileInfo] = useState(null);
  const [loading, setLoading] = useState(true); // start as true until checked

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState(true);
        setUserProfileInfo(user);
      } else {
        setAuthState(false);
        setUserProfileInfo(null);
      }
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  return { authState, userProfileInfo, loading };
}
