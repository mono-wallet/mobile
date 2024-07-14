import "../global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { I18nextProvider } from "react-i18next";
import ReactQuery from "@/context/ReactQuery";
import KeyboardAvoiding from "@/context/KeyboardAvoiding";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme as NWUseColorScheme } from "nativewind";
import { useColorScheme } from "react-native";
import i18n from "@/i18n";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "login",
};

const RootLayout = () => {
  const { setColorScheme } = NWUseColorScheme();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    setColorScheme(colorScheme ?? "dark");
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <I18nextProvider i18n={i18n}>
        <ReactQuery>
          <SafeAreaProvider>
            <KeyboardAvoiding>
              <Slot />
            </KeyboardAvoiding>
          </SafeAreaProvider>
        </ReactQuery>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
