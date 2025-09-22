import { auth, db } from "@/firebase/config"
import { collection, addDoc } from "firebase/firestore"

export async function addFile(files, path) {
  if (!auth.currentUser) return null;
  const results = []
  for (const file of files) {
    const docRef = await addDoc(collection(db, path), {
      name: file.name,
      type: file.name.split('.').pop().toLowerCase(),
      size: file.size,
      uploadedBy: auth.currentUser.uid,
      createdAt: new Date()
    })

    results.push({ id: docRef.id, name: file.name })
  }

  return results
}