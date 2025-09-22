import { db, auth } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "sonner";

export const deleteData = async (id, path, uid) =>{
    const promptRef = doc(db, path, id)
    if(!auth.currentUser) return;
    if (uid == auth.currentUser?.uid) {
      try {
        await deleteDoc(promptRef)
        toast.success('Data deleted')
      } catch (error) {
        toast.error('Faild to remove')
        throw Error
      }
    } else {
      toast.warning('Invalid Route')
      window.location.href = '/';
    }
}