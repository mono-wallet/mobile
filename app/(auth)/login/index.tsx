import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { H2, Lead } from "@/components/Typography";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Link } from "expo-router";
import AppleButton from "@/components/AppleButton";
import GoogleButton from "@/components/GoogleButton";

const LoginScreen = () => {
  const { t } = useTranslation("login");

  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between h-full px-4">
        <View className="flex flex-col">
          <H2 className="border-0">{t("title")}</H2>
          <Lead>{t("subtitle")}</Lead>
        </View>

        <View className="flex flex-col gap-4">
          <Button>
            <Text>{t("importWallet")}</Text>
          </Button>

          <Button>
            <Text>{t("standardLogin")}</Text>
          </Button>
        </View>

        <View className="flex flex-col gap-4 items-center">
          <Lead>{t("orSignInWith.title")}</Lead>

          <View className="flex flex-row">
            <AppleButton className="w-1/2 mr-2" />

            <GoogleButton className="w-1/2 ml-2" />
          </View>

          <View className="flex flex-row items-center">
            <Lead>{t("dontHaveAccount.title")}</Lead>

            <Link asChild href="/signup">
              <Button variant="link">
                <Text>{t("dontHaveAccount.button")}</Text>
              </Button>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
