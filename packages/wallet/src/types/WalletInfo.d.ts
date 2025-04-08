export interface WalletInfo {
  currency: string;
  balance: number;
  lastTransaction?: { id: string; amount: number; timestamp: number };
}
