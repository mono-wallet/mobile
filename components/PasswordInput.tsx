import { TextInput, View } from "react-native";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import React, { ComponentPropsWithoutRef, useCallback, useState } from "react";
import { Entypo } from "@expo/vector-icons";

const PasswordInput = (props: ComponentPropsWithoutRef<typeof TextInput>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <View className="relative">
      <Input {...props} secureTextEntry={!isPasswordVisible} />

      <Text className="absolute right-3 top-3">
        <Entypo
          onPress={togglePasswordVisibility}
          name={isPasswordVisible ? "eye" : "eye-with-line"}
          size={20}
        />
      </Text>
    </View>
  );
};

export default PasswordInput;
