import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
import i18n from "@/i18n";
import { useColorScheme } from "@/hooks/useColorScheme";
import { I18nextProvider } from "react-i18next";
import ReactQuery from "@/context/ReactQuery";
import KeyboardAvoiding from "@/context/KeyboardAvoiding";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "@/tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <TamaguiProvider config={tamaguiConfig}>
        <I18nextProvider i18n={i18n}>
          <ReactQuery>
            <SafeAreaProvider>
              <KeyboardAvoiding>
                <Stack>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen name="+not-found" />
                </Stack>
              </KeyboardAvoiding>
            </SafeAreaProvider>
          </ReactQuery>
        </I18nextProvider>
      </TamaguiProvider>
    </ThemeProvider>
  );
}
