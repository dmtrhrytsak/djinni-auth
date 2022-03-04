import { useAuthContext } from '../contexts/auth.context';
import { RemindForm } from '../components/Auth';
import { AuthPage } from '../components/Routes';

const RemindPage = () => {
  const { resetPassword } = useAuthContext();

  return (
    <AuthPage>
      <section className="mx-auto w-80 py-10">
        <div className="flex flex-col items-center justify-center">
          <h3 className="w-full text-3xl text-left lg:text-4xl after:block after:h-[1px]  after:bg-gray-100 after:my-5">
            Скидання паролю
          </h3>

          <RemindForm onPasswordReset={resetPassword} />
        </div>
      </section>
    </AuthPage>
  );
};

export default RemindPage;
