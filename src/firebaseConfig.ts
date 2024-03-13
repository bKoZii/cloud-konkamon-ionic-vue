import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc} from "firebase/firestore";
import { env } from "./env/env";


export const firebaseApp = initializeApp(env.firebase);


const db = getFirestore(firebaseApp);
export const memberRef = collection(db, 'members');

export const addMember = async (data: any) => {
  try {
    await addDoc(memberRef, { ...data });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteMember = async (id: any) => {
  try {
    await deleteDoc(doc(memberRef, id))
  } catch (e) {
    console.error("Error adding document: ", e);
    console.log(id);
  }
}