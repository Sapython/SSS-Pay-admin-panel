export type UserData = {
    userId:string;
    name:string;
    email:string;
    age:0,
    phone?:string;
    photo:string;
    access:UserAccess;
    status:UserStatus;
    aadhaarNo:string;
    panCardNo:string;
    gender:'male'|'female'|'other'|'unknown';
}

export type UserStatus = {
    isOnline:boolean;
    access:'active' | 'inactive' | 'blocked' | 'deleted';
}
export type UserAccess={
    access:'admin'|'guest'|'agent'|'supervisor';
}
