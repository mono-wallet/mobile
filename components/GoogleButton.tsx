import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ClassName } from "@/types/class-name";

const GoogleButton = ({ className }: Partial<ClassName>) => {
  const { t } = useTranslation("google");

  return (
    <Button variant="secondary" className={className}>
      <View className="flex flex-row gap-2">
        <Text>
          <FontAwesome name="google" size={20} />
        </Text>

        <Text>{t("title")}</Text>
      </View>
    </Button>
  );
};

export default GoogleButton;
