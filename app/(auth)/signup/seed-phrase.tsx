import ethereum from "@/services/ethereum";
import { useEffect } from "react";
import { Text } from "@/components/Text";

const Show = () => {
  useEffect(() => {
    const wallet = ethereum.createWallet();

    console.log("wallet", wallet);
  }, []);

  return <Text>123</Text>;
};

export default Show;
