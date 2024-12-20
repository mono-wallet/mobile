import "../global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { I18nextProvider } from "react-i18next";
import ReactQuery from "@/providers/ReactQuery";
import KeyboardAvoiding from "@/providers/KeyboardAvoiding";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme as NWUseColorScheme } from "nativewind";
import i18n from "@/i18n";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Appearance } from "react-native";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(auth)/login",
};

const RootLayout = () => {
  const { setColorScheme, colorScheme } = NWUseColorScheme();
  const [loaded] = useFonts({
    Geist: require("../assets/fonts/Geist-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    
    setColorScheme("dark");
    Appearance.setColorScheme('dark');;
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <ReactQuery>
          <SafeAreaProvider>
            <KeyboardAvoiding>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              />
            </KeyboardAvoiding>
          </SafeAreaProvider>
        </ReactQuery>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
