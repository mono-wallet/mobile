import { createTamagui } from "tamagui";
import { config as tamaguiConfig } from "@tamagui/config/v3";

export const config = createTamagui(tamaguiConfig);

type Conf = typeof config;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
