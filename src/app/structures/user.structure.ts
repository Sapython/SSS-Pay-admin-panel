export type UserData = {
    userId:string;
    name:string;
    email:string;
    phone?:string;
    photo:string;
    access:UserAccess;
    status:UserStatus;
    aadhaarNo:string;
    panCardNo:string;
}

export type UserStatus = {
    isOnline:boolean;
    access:'active' | 'inactive' | 'blocked' | 'deleted';
}
export type UserAccess={
    access:'admin'|'guest'|'agent'|'supervisor';
}
