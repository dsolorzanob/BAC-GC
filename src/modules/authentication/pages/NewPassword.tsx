
import EnterNewPasswordForm from "../containers/EnterNewPasswordForm";
import { ResetPasswordLayout } from "../layouts/ResetPasswordLayout";

const NewPasswordPage = () => {
  return (
    <ResetPasswordLayout>
      <EnterNewPasswordForm />
    </ResetPasswordLayout>
  );
};

export default NewPasswordPage;