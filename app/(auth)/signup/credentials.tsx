import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { H2, Lead } from "@/components/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import PasswordInput from "@/components/PasswordInput";

const CredentialsScreen = () => {
  const { t } = useTranslation("registerWithEmailAndPassword");
  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between h-full px-4">
        <View className="flex flex-col">
          <H2 className="border-0">{t("title")}</H2>
          <Lead className="">{t("subtitle")}</Lead>
        </View>

        <View className="flex flex-col gap-8">
          <Input
            nativeID="account"
            placeholder={t("inputs.account.placeholder")}
          />

          <PasswordInput
            nativeID="password"
            placeholder={t("inputs.password.placeholder")}
          />
        </View>

        <Button>
          <Text>{t("getStarted")}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default CredentialsScreen;
