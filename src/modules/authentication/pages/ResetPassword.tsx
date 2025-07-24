import EnterEmailForm from "../containers/EnterEmailForm";
import { ResetPasswordLayout } from "../layouts/ResetPasswordLayout";

const SendEmailPage = () => {
  return (
    <ResetPasswordLayout>
      <EnterEmailForm />
    </ResetPasswordLayout>
  );
};

export default SendEmailPage;