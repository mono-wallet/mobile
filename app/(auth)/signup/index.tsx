import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import React from "react";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { View } from "react-native";
import { H2, Lead } from "@/components/Typography";
import { Link } from "expo-router";

const SignUpScreen = () => {
  const { t } = useTranslation("register");
  const { t: tGlobal } = useTranslation();

  return (
    <SafeAreaView>
      <View className="flex flex-col justify-between h-full px-4">
        <H2 className="border-0">{t("title")}</H2>

        <View className="flex flex-col gap-4">
          <Button>
            <Text>{t("createSeed")}</Text>
          </Button>

          <Button>
            <Text>{t("standardRegister")}</Text>
          </Button>
        </View>

        <View className="flex flex-col gap-4 items-center">
          <Lead>{t("orSignupWith.title")}</Lead>

          <View className="flex flex-row">
            <Button variant="secondary" className="w-1/2 mr-2">
              <View className="flex flex-row">
                <Text>{tGlobal("apple:title")}</Text>
              </View>
            </Button>

            <Button variant="secondary" className="w-1/2 ml-2">
              <Text>{tGlobal("google:title")}</Text>
            </Button>
          </View>

          <View className="flex flex-row items-center">
            <Lead>{t("haveAccount.title")}</Lead>

            <Link asChild href="/login">
              <Button variant="link">
                <Text>{t("haveAccount.button")}</Text>
              </Button>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
