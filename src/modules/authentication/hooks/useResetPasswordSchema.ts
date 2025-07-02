import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordSchema } from "../constants/new-password-schema";
import { recoveryEmailSchema } from "../constants/recovery-email-schema";

const useResetPasswordSchema = () => {
  const {
    register:registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword, isSubmitting: isSubmittingPassword },
    watch: watchPassword,
    reset: resetPassword,
  } = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    mode: "onChange",
  });

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail, isSubmitting: isSubmittingEmail },
    watch: watchEmail,
    reset: resetEmail,
  } = useForm<z.infer<typeof recoveryEmailSchema>>({
    resolver: zodResolver(recoveryEmailSchema),
    mode: "onChange",
  });

  const onSubmit = (data: z.infer<typeof newPasswordSchema>) => {
    console.log(data);
  };

  const onSubmitEmail = (data: z.infer<typeof recoveryEmailSchema>) => {
    console.log(data);
  };

  return {
    // Password form
    registerPassword,
    handleSubmitPassword,
    errorsPassword,
    isSubmittingPassword,
    watchPassword,
    resetPassword,
    onSubmit,
    // Email form
    registerEmail,
    handleSubmitEmail,
    errorsEmail,
    isSubmittingEmail,
    watchEmail,
    resetEmail,
    onSubmitEmail,
  };

};

export default useResetPasswordSchema;