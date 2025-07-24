import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[3px] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        filled: "shadow-xs",
        outlined: "border shadow-xs",
        ghost: "",
        link: "underline-offset-4",
      },
      color: {
        primary: "",
        secondary: "",
        blue: "",
        error: "",
        success: "",
        warning: "",
        info: "",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-[3px] gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-[3px] px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    compoundVariants: [
      // Filled variants
      {
        variant: "filled",
        color: "primary",
        class:
          "bg-primary text-white hover:bg-primary-light active:bg-primary-dark active:text-white",
      },
      {
        variant: "filled",
        color: "secondary",
        class:
          "bg-secondary text-white hover:bg-secondary-light active:bg-secondary-dark active:text-white",
      },
      {
        variant: "filled",
        color: "blue",
        class: "bg-blue text-white hover:bg-blue-light",
      },
      {
        variant: "filled",
        color: "error",
        class:
          "bg-error text-white hover:bg-error-light active:bg-error-dark active:text-white",
      },
      {
        variant: "filled",
        color: "success",
        class:
          "bg-success text-white hover:bg-success-light active:bg-success-dark active:text-white",
      },
      {
        variant: "filled",
        color: "warning",
        class:
          "bg-warning text-white hover:bg-warning-light active:bg-warning-dark active:text-white",
      },
      {
        variant: "filled",
        color: "info",
        class:
          "bg-info text-white hover:bg-info-light active:bg-info-dark active:text-white",
      },
      // Outlined variants
      {
        variant: "outlined",
        color: "primary",
        class: "border-primary text-primary hover:bg-primary hover:text-white",
      },
      {
        variant: "outlined",
        color: "secondary",
        class:
          "border-secondary text-secondary hover:bg-secondary hover:text-white",
      },
      {
        variant: "outlined",
        color: "blue",
        class: "border-blue text-blue hover:bg-blue hover:text-white",
      },
      {
        variant: "outlined",
        color: "error",
        class: "border-error text-error hover:bg-error hover:text-white",
      },
      {
        variant: "outlined",
        color: "success",
        class: "border-success text-success hover:bg-success hover:text-white",
      },
      {
        variant: "outlined",
        color: "warning",
        class: "border-warning text-warning hover:bg-warning hover:text-white",
      },
      {
        variant: "outlined",
        color: "info",
        class:
          "border-info text-info hover:bg-info hover:text-white active:bg-info-dark active:text-white",
      },

      {
        variant: "ghost",
        color: "primary",
        class: "text-primary hover:bg-primary/10",
      },
      {
        variant: "ghost",
        color: "secondary",
        class: "text-secondary hover:bg-secondary/10",
      },
      {
        variant: "ghost",
        color: "blue",
        class: "text-blue hover:bg-blue/10",
      },
      {
        variant: "ghost",
        color: "error",
        class: "text-error hover:bg-error/10",
      },
      {
        variant: "ghost",
        color: "success",
        class: "text-success hover:bg-success/10",
      },
      {
        variant: "ghost",
        color: "warning",
        class: "text-warning hover:bg-warning/10",
      },
      {
        variant: "ghost",
        color: "info",
        class:
          "text-info hover:bg-info/10 active:bg-info-dark active:text-white",
      },
      // Link variants
      {
        variant: "link",
        color: "primary",
        class: "text-primary hover:underline",
      },
      {
        variant: "link",
        color: "secondary",
        class: "text-secondary hover:underline",
      },
      {
        variant: "link",
        color: "info",
        class: "text-info hover:underline active:text-info-dark",
      },
      {
        variant: "link",
        color: "error",
        class: "text-error hover:underline",
      },
      {
        variant: "link",
        color: "success",
        class: "text-success hover:underline",
      },
      {
        variant: "link",
        color: "warning",
        class: "text-warning hover:underline",
      },
      {
        variant: "link",
        color: "info",
        class: "text-info hover:underline",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  color,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, color, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
