import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { I18nextProvider } from "react-i18next";
import ReactQuery from "@/context/ReactQuery";
import KeyboardAvoiding from "@/context/KeyboardAvoiding";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { LogBox } from "react-native";
import i18n from "@/i18n";

LogBox.ignoreLogs([/^Cannot update a component*/]);

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "login/",
};

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
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
