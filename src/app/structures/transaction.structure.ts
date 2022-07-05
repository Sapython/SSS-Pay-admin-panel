import { Timestamp } from "@angular/fire/firestore";

export type Transaction = {
  transactionId?: string;
  amount: number;
  merchantId: string;
  timestamp: Timestamp;
  status: 'Success' | 'Pending' | 'Failed';
};
