export type UserData = {
  userId:string;
  displayName:string;
  email:string;
  phoneNumber?:string;
  dob:Date;
  photoURL:string;
  gender:'male' | 'female' | 'other' | 'not-specified';
  emailVerified:boolean;
  access:UserAccess;
  status:UserStatus;
  nickName?:string;
  state?:string;
  city?:string;
  pincode?:string;
  address:string;
  aadhaarNumber:string;
  panCardNumber:string;
  tutorialCompleted:boolean;
}

export type UserStatus = {
  isOnline: boolean;
  access: 'active' | 'inactive' | 'blocked' | 'deleted';
};
export type UserAccess = {
  access: 'admin' | 'guest' | 'agent' | 'supervisor';
};
