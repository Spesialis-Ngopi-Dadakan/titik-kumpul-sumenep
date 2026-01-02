import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const placesRef = collection(db, "places");

export function createPlace(data) {
  return addDoc(placesRef, {
    ...data,
    category: "Kedai Kopi",
    createdAt: serverTimestamp(),
  });
}

export function subscribePlaces(callback) {
  const q = query(placesRef, orderBy("createdAt", "desc"));
  return onSnapshot(q, callback);
}
