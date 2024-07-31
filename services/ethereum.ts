import "@ethersproject/shims";
import { HDNodeWallet } from "ethers";
import { CryptoService } from "@/types/crypto-service";
import { CreateWallet } from "@/types/create-wallet";

class Ethereum implements CryptoService, CreateWallet {
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
