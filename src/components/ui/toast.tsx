import { toast } from "sonner";

type ToastType = "success" | "error" | "info" | "warning" | "default";

interface ToastOptions {
  description?: string;
  duration?: number;
  icon?: React.ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export function showToast(
  type: ToastType,
  title: string,
  options?: ToastOptions
) {
  const defaultOptions = {
    duration: 4000,
    position: "top-right" as const,
    ...options,
  };

  switch (type) {
    case "success":
      toast.success(title, defaultOptions);
      break;
    case "error":
      toast.error(title, defaultOptions);
      break;
    case "info":
      toast.info(title, defaultOptions);
      break;
    case "warning":
      toast.warning(title, defaultOptions);
      break;
    default:
      toast(title, defaultOptions);
      break;
  }
}
