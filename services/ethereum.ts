import "@ethersproject/shims";
import { CryptoService } from "@/types/crypto-service";
import { HDNodeWallet } from "ethers";

class Ethereum implements CryptoService {
  createWallet(): HDNodeWallet {
    return HDNodeWallet.createRandom();
  }

  restoreWalletFromPhrase(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  sendTransaction(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  calculateGasAndAmounts(): Promise<string> {
    throw new Error("Method not implemented.");
  }
}

const ethereum = new Ethereum();

export default ethereum;
