import { Link, router } from "expo-router";
import { ReactNode } from "react";
import { H2, Lead, P } from "./Typography";
import { Button } from "./Button";
import { Text } from "./Text";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View } from "react-native";

type InfoModalProps = {
  title: string;
  subtitle: string;
  button: InfoModalButton;
  steps: InfoModalStep[];
};

type InfoModalStep = {
  description: string;
  icon: ReactNode;
};

type InfoModalButton = {
  title: string;
  onPress: () => void;
};

const InfoModal = ({ title, subtitle, steps, button }: InfoModalProps) => {
  const isPresented = router.canGoBack();

  return (
    <View className="flex flex-col h-full p-5 pb-10 justify-between">
      <View className="flex flex-col gap-5">
        {isPresented && (
          <Link href="../">
            <Text>
              <FontAwesome6 name="arrow-left" size={24} />
            </Text>
          </Link>
        )}
        <View className="flex flex-col">
          <H2 className="border-0">{title}</H2>
          {subtitle && <Lead className="">{subtitle}</Lead>}
        </View>
      </View>

      <View className="flex flex-col gap-5">
        {steps.map((step) => (
          <Step key={step.description} {...step} />
        ))}
      </View>

      <Button onPress={button.onPress}>
        <Text>{button.title}</Text>
      </Button>
    </View>
  );
};

const Step = ({ description, icon }: InfoModalStep) => {
  return (
    <View className="flex flex-row items-center gap-4 pr-5">
      <Text>{icon}</Text>
      <P>{description}</P>
    </View>
  );
};

export default InfoModal;
