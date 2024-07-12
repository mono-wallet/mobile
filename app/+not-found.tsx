import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const NotFoundScreen = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Link style={{ color: "white" }} href="/login">
        Go back to home
      </Link>
    </SafeAreaView>
  );
};

export default NotFoundScreen;
