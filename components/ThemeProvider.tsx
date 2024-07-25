import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "nativewind";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNThemeProvider,
} from "@react-navigation/native";
import { useColorScheme as RNUseColorScheme } from "react-native";
import { storage } from "@/lib/mmkv";

DefaultTheme.colors.background = "white";
DarkTheme.colors.background = "#09090b";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [loaded, setLoaded] = useState(false);
  const { colorScheme, setColorScheme } = useColorScheme();
  const rnColorScheme = RNUseColorScheme();

  useEffect(() => {
    if (loaded) {
      const theme = storage.getString("theme");

      if (!theme) {
        const cs = rnColorScheme === "dark" ? "dark" : "light";

        storage.set("theme", cs);
        setColorScheme(cs);
        return;
      }

      if (colorScheme && theme !== colorScheme) {
        storage.set("theme", colorScheme);
        return;
      }
    }
  }, [colorScheme, loaded]);

  useEffect(() => {
    const theme = storage.getString("theme");

    if (theme) {
      setColorScheme(theme as "light" | "dark");
    }

    setLoaded(true);
  }, []);

  const isDarkMode = useMemo(
    () => (!loaded && rnColorScheme === "dark") || colorScheme === "dark",
    [loaded, rnColorScheme, colorScheme],
  );

  return (
    <RNThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
      {children}
    </RNThemeProvider>
  );
};
