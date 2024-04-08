import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { env } from "./env/env";
import { MemberInterface } from "./memberInterface";

export const firebaseApp = initializeApp(env.firebase);

const db = getFirestore(firebaseApp);
export const memberRef = collection(db, "members-test");
export const addMember = async (data: MemberInterface): Promise<string> => {
  try {
    await addDoc(memberRef, data);
    return "เพิ่มข้อมูลสมาชิกสำเร็จ";
  } catch (e: any) {
    throw new Error("Error adding document: " + e.message);
  }
};

export const deleteMember = async (id: string): Promise<string> => {
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
