import { HDNodeWallet } from "ethers";

export type CreateWallet = {
  createWallet(): HDNodeWallet;
};
