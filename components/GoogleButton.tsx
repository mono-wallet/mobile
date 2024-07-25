import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const GoogleButton = () => {
  const { t } = useTranslation("google");

  return (
    <Button variant="secondary" className="w-1/2 ml-2">
      <View className="flex flex-row">
        <Text>
          <FontAwesome name="google" size={24} />
        </Text>
        <Text>{t("title")}</Text>
      </View>
    </Button>
  );
};

export default GoogleButton;
