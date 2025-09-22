import { db } from "@/firebase/config"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { toast } from "sonner"

export const createuser = async (user, ref_sigin) => {
    const ref = doc(db, 'users', user.uid)
    const docRef = await getDoc(ref)
    if (docRef.exists()) {
        console.log('User already exists');
        toast.success('Welcome back!')
        return;
    }
    try {
        await setDoc(ref, {
            email: user.email,
            name: user.displayName,
            avatar: user.photoURL,
            uid: user.uid,
            plan: 'free',
            new_user: ref_sigin,
            createdAt: serverTimestamp()
        }, {merge: true})

        console.log('User created successfully');
        toast.success('Account created successfully!')
    } catch (error) {
        console.log(error)
    }
}