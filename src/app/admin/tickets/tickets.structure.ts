export type Ticket = {
    id?: string;
    avatar:string;
    displayName:string;
    email:string;
    userId:string;
    status:'ongoing' | 'unresolved' | 'resolved';
    problem:Problem
    date:any;
}

type Problem = {
    subject:string;
    description:string;
    log:any;
}