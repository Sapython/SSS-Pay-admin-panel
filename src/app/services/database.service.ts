import { I } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  getDocs,
  orderBy,
  query,
  limit,
  doc,
  where,
  collectionSnapshots,
  updateDoc,
  deleteDoc,
  addDoc,
  DocumentSnapshot,
  startAfter,
  endAt,
  limitToLast,
  collectionGroup,
  getCountFromServer,
  serverTimestamp,
  increment,
} from '@angular/fire/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { getDoc } from '@firebase/firestore';
import { Ticket } from '../admin/tickets/tickets.structure';
import { filter, map } from 'rxjs';

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

  getCustomers() {
    // return getDocs(query(collection(this.fs,'users'),where('access.access','==','customer')));
    return getDocs(collection(this.fs, 'users'));
  }

  getAgents() {
    return getDocs(query(collection(this.fs,'users'),where('access.access','in',['superDistributor','masterDistributor','distributor','retailer','guest','blocked'])));
    // return getDocs(collection(this.fs, 'users'));
  }

  getTransactions(userId:string) {
    return getDocs(
      query(collection(this.fs, 'users/'+userId+'/transaction'), orderBy('date', 'desc'))
    );
  }

  getAllTransactions() {
    return getDocs(query(collection(this.fs, 'transaction'),orderBy('date', 'desc'),));
  }

  getFirstTransactions(length: number) {
    // alert('Getting first recipes')
    return getDocs(
      query(collectionGroup(this.fs, 'transaction'), orderBy('date', 'desc'), limit(length))
    );
  }
  getNextTransactions(length: number, lastDocument: DocumentSnapshot) {
    // alert('Getting next recipes')
    return getDocs(
      query(
        collectionGroup(this.fs, 'transaction'),
        orderBy('date', 'desc'),
        limit(length),
        startAfter(lastDocument)
      )
    );
  }

  getPreviousTransactions(length: number, firstDocument: DocumentSnapshot) {
    // alert('Getting previous recipes')
    return getDocs(
      query(
        collectionGroup(this.fs, 'transaction'),
        orderBy('date', 'desc'),
        limitToLast(length),
        endAt(firstDocument)
      )
    );
  }

  getUser(userId: string) {
    return getDoc(doc(this.fs, 'users/' + userId));
  }

  getAadhaarInfo(userId:string){ 
    return getDoc(doc(this.fs,`users/${userId}/aadhaar/data`));
  }

  getPanInfo(userId:string){
    return getDoc(doc(this.fs,`users/${userId}/pan/data`));
  }

  getKycRequests(downlineMembers?:string[]) {
    if (downlineMembers){
      console.log("for ",downlineMembers,);
      return collectionSnapshots(query(collection(this.fs, 'users'),where('kycStatus','in',['pending','rejected','approved']))).pipe(map(data => data.filter(usr => {
        console.log("data in pipe",data,usr);
        return usr.id in downlineMembers
      })));
    }
    return collectionSnapshots(query(collection(this.fs, 'users'),where('kycStatus','in',['pending','rejected','approved'])));
  }

  rejectKycRequest(userId:string){
    return updateDoc(doc(this.fs,'users/'+userId),{kycStatus:'rejected'});
  }

  approveKycRequest(userId:string){
    return updateDoc(doc(this.fs,'users/'+userId),{kycStatus:'approved'});
  }
  // Commissions
  getCommissions() {
    return getDocs(collection(this.fs, 'commissions'));
  }
  getCommission(id: string) {
    return getDoc(doc(this.fs, 'commissions/' + id));
  }
  addCommission(commission: any) {
    return addDoc(collection(this.fs,'commissions'), commission);
  }
  updateCommission(id: string, commission: any) {
    return updateDoc(doc(this.fs, 'commissions/' + id), commission);
  }
  deleteCommission(id: string) {
    return deleteDoc(doc(this.fs, 'commissions/' + id));
  }
  // Charge
  getCharges() {
    return getDocs(collection(this.fs, 'charges'));
  }
  getCharge(id: string) {
    return getDoc(doc(this.fs, 'charges/' + id));
  }
  addCharge(commission: any) {
    return addDoc(collection(this.fs,'charges'), commission);
  }
  updateCharge(id: string, commission: any) {
    return updateDoc(doc(this.fs, 'charges/' + id), commission);
  }
  deleteCharge(id: string) {
    return deleteDoc(doc(this.fs, 'charges/' + id));
  }

  // tickets

  addTicket(ticket: Ticket) {
    return addDoc(collection(this.fs,'tickets'), ticket);
  }

  getTickets(type:'ongoing' | 'unresolved' | 'resolved') {
    return collectionSnapshots(query(collection(this.fs, 'tickets'),orderBy('date', 'desc'),where('status', '==', type)));
  }

  setStatus(id:string,status:'ongoing' | 'unresolved' | 'resolved'){
    return updateDoc(doc(this.fs,'tickets/'+id),{status:status});
  }

  async getUserBalance(userId:string){
    let res = await getDoc(doc(this.fs,'users/'+userId+'/wallet/wallet'));
    var data = res.data()
    if(data){
      return data['balance'];
    } else {
      return 'Cannot Fetch Balance';
    }
  }
  counter = 0;
  async getUserCommission(userId:string){
    console.log("counter",this.counter+=1);
    
    let res = await getDocs(collection(this.fs,'users/'+userId+'/commissions'));
    return res.docs.map((doc)=> {return {...doc.data(),id:doc.id} as any})
  }

  getWalletNarrations(userId:string){
    console.log('users/'+userId+'/walletNarration');
    return getDocs(query(collection(this.fs,'users/'+userId+'/walletNarration'),orderBy('transactionTime','desc')));
  }

  getDownlineMembers(userId:string){
    return getDocs(query(collection(this.fs,'users'),where('ownerId','==',userId)));
  }

  getAllUserTransactions(){
    return getDocs(query(collectionGroup(this.fs,'transaction'),limit(10),orderBy('date','desc')));
  };

  getCountTransaction(){
    let collection = query(collectionGroup(this.fs,'transaction'));
    return getCountFromServer(collection);
  }

  async addWalletNarration(amount:number,narration:string,userId:string){
    let docData = await getDoc(doc(this.fs,'users/'+userId+'/wallet/wallet'))
    if(docData.exists()){
      await addDoc(collection(this.fs,'users/'+userId+'/walletNarration'),{
        amount:amount,
        narration:narration,
        transactionTime:serverTimestamp(),
        transactionType:'credit',
        balance:docData.data()['balance'],
        service:'receive',
        actionType:'Transaction-Credit',
      });
      return updateDoc(doc(this.fs,'users/'+userId+'/wallet/wallet'),{
        balance:increment(amount)
      })
    } else {
      // return failed promise
      return Promise.reject('Wallet Not Found');
    }
  }

  async deductWalletNarration(amount:number,narration:string,userId:string){
    let docData = await getDoc(doc(this.fs,'users/'+userId+'/wallet/wallet'))
    if(docData.exists()){
      if (docData.data()['balance'] < amount) return Promise.reject('Insufficient Balance');
      await addDoc(collection(this.fs,'users/'+userId+'/walletNarration'),{
        amount:-amount,
        narration:narration,
        transactionTime:serverTimestamp(),
        transactionType:'debit',
        balance:docData.data()['balance'],
        service:'send',
        actionType:'Transaction-Credit',
      });
      return updateDoc(doc(this.fs,'users/'+userId+'/wallet/wallet'),{
        balance:increment(-amount)
      })
    } else {
      // return failed promise
      return Promise.reject('Wallet Not Found');
    }
  }

}
