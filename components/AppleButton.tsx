import { Button } from "@/components/Button";
import { View } from "react-native";
import { Text } from "@/components/Text";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { ClassName } from "@/types/class-name";

const AppleButton = ({ className }: Partial<ClassName>) => {
  const { t } = useTranslation("apple");

  return (
    <Button variant="secondary" className={className}>
      <View className="flex flex-row items-center gap-2">
        <Text>
          <FontAwesome name="apple" size={20} />
        </Text>

        <Text>{t("title")}</Text>
      </View>
    </Button>
  );
};

export default AppleButton;
