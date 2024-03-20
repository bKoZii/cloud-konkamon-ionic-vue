import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { env } from "./env/env";

export const firebaseApp = initializeApp(env.firebase);

const db = getFirestore(firebaseApp);
export const memberRef = collection(db, "members");
export const addMember = async (data: any): Promise<string> => {
  try {
    await addDoc(memberRef, data);
    return "เพิ่มข้อมูลสมาชิกสำเร็จ";
  } catch (e: any) {
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

export const updateMember = async (id: any, data: any): Promise<string> => {
  try {
    await updateDoc(doc(memberRef, id), data);
    return "อัพเดทข้อมูลสมาชิกสำเร็จ";
  } catch (e: any) {
    console.error("Error Updating document: ", e);
    throw new Error("Error: " + e.message);
  }
};
export const getOneMember = async (id: any) => {
  try {
    await (
      await getDoc(doc(memberRef, id))
    ).id;
  } catch (e: any) {
    console.error(e);
  }
};
