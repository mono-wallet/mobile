import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

const KeyboardAvoiding = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoiding;