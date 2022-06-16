import { Injectable } from '@angular/core';
import {
  collection,
  collectionSnapshots,
  deleteDoc,
  Firestore,
  getDocs,
  orderBy,
  query,
  updateDoc,
  Timestamp,
  limit,
  startAt,
  startAfter,
  limitToLast,
  endBefore,
  addDoc,
  doc,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  increment,
  endAt,
} from '@angular/fire/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  storage = getStorage();
  constructor(private fs: Firestore) {}
  async upload(
    path: string,
    file: File | ArrayBuffer | Blob | Uint8Array
  ): Promise<any> {
    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        await task;
        const url = await getDownloadURL(storageRef);
        return url;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    } else {
      return false;
    }
  }
}
