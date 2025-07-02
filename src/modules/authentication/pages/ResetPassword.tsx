import EnterEmailForm from "../containers/EnterEmailForm";
import { ResetPasswordLayout } from "../layouts/ResetPasswordLayout";

const ResetPasswordPage = () => {
  return (
    <ResetPasswordLayout>
      <EnterEmailForm />
    </ResetPasswordLayout>
  );
};

export default ResetPasswordPage;