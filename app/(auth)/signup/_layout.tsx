import { Stack } from "expo-router";

const SignUpLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="credentials" />
      <Stack.Screen name="seed-phrase" />
      <Stack.Screen
        name="(modals)/seed-phrase"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="(modals)/credentials"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default SignUpLayout;
