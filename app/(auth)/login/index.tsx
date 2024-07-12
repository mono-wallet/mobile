import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
  const { t } = useTranslation("login");

  return <SafeAreaView style={{ flex: 1 }}></SafeAreaView>;
};

export default LoginScreen;
