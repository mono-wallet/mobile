import ethereum from "@/services/ethereum";
import { useEffect } from "react";
import { Text } from "@/components/Text";

const SeedPhrase = () => {
  useEffect(() => {
    const wallet = ethereum.createWallet();

    console.log("213wallet", wallet);
  }, []);

  return <Text>123</Text>;
};

export default SeedPhrase;
