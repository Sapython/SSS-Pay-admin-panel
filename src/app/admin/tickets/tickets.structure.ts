export type Ticket = {
    avatar:string;
    name:string;
    email:string;
    ticketNumber:string;
    ticketSummaryTitle:string;
    ticketSummaryBody:string;
    timeSummary:string;
    actualTime:Date;
    status:'open' | 'closed' | 'in-progress';
}