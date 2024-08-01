import { cva, VariantProps } from "class-variance-authority";
import { cloneElement, PropsWithChildren, ReactElement } from "react";
import { View, Text } from "react-native";

const StatusIconVariants = cva(
  "p-2 size-10 flex justify-center items-center rounded-full",
  {
    variants: {
      variant: {
        success: "bg-green-300",
        error: "bg-red-300",
        warning: "bg-yellow-300",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

const StatusIconTextVariants = cva("", {
  variants: {
    variant: {
      success: "text-green-700",
      error: "text-red-700",
      warning: "text-yellow-700",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

const StatusIcon = ({
  variant,
  children,
}: VariantProps<typeof StatusIconVariants> & PropsWithChildren) => {
  return (
    <View className={StatusIconVariants({ variant })}>
      <Text className={StatusIconTextVariants({ variant })}>
        {cloneElement(children as ReactElement<any>, { size: 18 })}
      </Text>
    </View>
  );
};

export default StatusIcon;
