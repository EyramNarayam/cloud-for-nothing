'use client'
import { useEffect, useState } from "react"
import useAuthSession from "../auth/AuthSession"
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";

export default function ReadData() {
  const { loading, authState, userProfileInfo } = useAuthSession();
  const [data, setData] = useState([])
  const [loadingData, setLoadingData] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (loading) return; // wait until auth session resolves

    if (!authState || !userProfileInfo) {
      setError("no_user");
      setLoadingData(false);
      return;
    }

    const dataQuery = query(
      collection(db, "deletes"),
      where("uploadedBy", "==", userProfileInfo.uid)
    );

    // subscribe in real-time
    const unsubscribe = onSnapshot(
      dataQuery,
      (querySnapshot) => {
        const getData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(getData);
        setLoadingData(false);
      },
      (err) => {
        console.error("Error fetching data: ", err);
        setError("firebase_error");
        setLoadingData(false);
      }
    );

    return () => unsubscribe();
  }, [loading, authState, userProfileInfo]);

  return { data, loadingData, error };
}