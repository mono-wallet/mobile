import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import React from "react";

const SignUpScreen = () => {
  const { t } = useTranslation("register");

  return <SafeAreaView style={{ flex: 1 }}></SafeAreaView>;
};

export default SignUpScreen;
