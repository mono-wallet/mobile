import { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { View } from "react-native";
import { cn } from "../lib/utils";
import { TextClassContext } from "./Text";

const badgeVariants = cva(
  "web:inline-flex items-center rounded-full border border-border px-2.5 py-0.5 web:transition-colors web:focus:outline-none web:focus:ring-2 web:focus:ring-ring web:focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary web:hover:opacity-80 active:opacity-80",
        secondary:
          "border-transparent bg-secondary web:hover:opacity-80 active:opacity-80",
        destructive:
          "border-transparent bg-destructive web:hover:opacity-80 active:opacity-80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const badgeTextVariants = cva("web:text-sm font-semibold ", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      outline: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type BadgeProps = ComponentPropsWithoutRef<typeof View> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <TextClassContext.Provider value={badgeTextVariants({ variant })}>
      <View className={cn(badgeVariants({ variant }), className)} {...props} />
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
export type { BadgeProps };
