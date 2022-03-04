import Link from 'next/link';

import { SocialsAuth } from '../components/Auth';
import { RegisterForm } from '../components/Auth';
import { AuthPage } from '../components/Routes';
import { useAuthContext } from '../contexts/auth.context';

const SignupPage = () => {
  const { signInWithGoogle, signUpWithEmailAndPassword } = useAuthContext();

  return (
    <AuthPage>
      <section className="mx-auto w-72 py-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl text-center after:block after:h-[1px] after:bg-gray-100 after:my-5">
            Реєстрація на Джині
          </p>

          <RegisterForm onRegister={signUpWithEmailAndPassword} />
          <SocialsAuth onSignInWithGoogle={signInWithGoogle} />
        </div>

        <Link href="/login">
          <a className="text-sky-600 text-sm">Я вже маю акаунт</a>
        </Link>
      </section>
    </AuthPage>
  );
};

export default SignupPage;
