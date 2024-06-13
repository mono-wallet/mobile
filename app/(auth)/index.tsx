import { Button, H2, H5, H6, XStack, YStack } from "tamagui";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { Link } from "expo-router";

const AuthPage = () => {
  const { t } = useTranslation("login");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack
        flex={1}
        justifyContent="space-between"
        paddingVertical="$6"
        paddingHorizontal="$2"
      >
        <YStack>
          <H2 fontWeight="900">{t("title")}</H2>

          <H5 fontWeight="400" color="$secondaryColor">
            {t("subtitle")}
          </H5>
        </YStack>

        <YStack gap="$4">
          <Button>{t("importWallet")}</Button>

          <Button>{t("standardLogin")}</Button>
        </YStack>

        <YStack justifyContent="center" gap="$4">
          <H6 alignSelf="center" color="$secondaryColor">
            {t("orSigninWith.title")}
          </H6>

          <YStack>
            <XStack justifyContent="center" gap="$4"></XStack>

            <XStack justifyContent="center">
              <H6 alignSelf="center" color="$secondaryColor">
                {t("dontHaveAccount.title")}
              </H6>

              <Link href="/register" asChild>
                <Button variant="outlined">
                  {t("dontHaveAccount.button")}
                </Button>
              </Link>
            </XStack>
          </YStack>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

export default AuthPage;
