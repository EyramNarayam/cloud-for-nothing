import { auth } from "@/firebase/config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { createuser } from "./create-user";


export const googleAuth = async (ref) => {
    const provider = new GoogleAuthProvider()
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        await createuser(user, ref)

        return user;
    } catch (error) {
        console.error('❌ Google Sign-In error:', error.message);
        throw error;
    }
}

export const githubAuth = async (ref) => {
    const provider = new GithubAuthProvider()
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        await createuser(user, ref)

        return user;
    } catch (error) {
        console.error('❌ Google Sign-In error:', error.message);
        throw error;
    }
}