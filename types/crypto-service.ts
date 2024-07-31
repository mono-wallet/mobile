export interface CryptoService {
  restoreWalletFromPhrase(): Promise<string>;
  sendTransaction(): Promise<string>;
  calculateGasAndAmounts(): Promise<string>;
}
