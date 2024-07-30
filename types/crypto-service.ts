import { HDNodeWallet } from "ethers";

export interface CryptoService {
  createWallet?(): HDNodeWallet;
  restoreWalletFromPhrase(): Promise<string>;
  sendTransaction(): Promise<string>;
  calculateGasAndAmounts(): Promise<string>;
}
