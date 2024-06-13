import { Tabs } from "expo-router";

const AuthLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="register" />
    </Tabs>
  );
};

export default AuthLayout;
