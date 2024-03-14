import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc} from "firebase/firestore";
import { env } from "./env/env";


export const firebaseApp = initializeApp(env.firebase);

const db = getFirestore(firebaseApp);
export const memberRef = collection(db, 'members');

export const addMember = async (data: any): Promise<string> => {
    try {
      await addDoc(memberRef, data);
     return ("เพิ่มข้อมูลสมาชิกสำเร็จ")
    } catch (e:any) {
      throw new Error("Error adding document: " + e.message);
    }
};

export const deleteMember = async (id: any): Promise<string> => {
  try {
     await deleteDoc(doc(memberRef, id));
     return "ลบข้อมูลสมาชิกสำเร็จ";
  } catch (e: any) {
     console.error("Error deleting document: ", e);
     throw new Error("Error: " + e.message);
  }
 };