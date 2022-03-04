import Link from 'next/link';

import { AuthPage } from '../components/Routes';
import { LoginForm, SocialsAuth } from '../components/Auth';
import { useAuthContext } from '../contexts/auth.context';

const LoginPage = () => {
  const { signInWithCredentials, signInWithGoogle } = useAuthContext();

  return (
    <AuthPage>
      <section className="mx-auto w-56 py-8">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl text-center after:block after:h-[1px] after:bg-gray-100 after:my-5">
            Увійти на Джин
          </h3>

          <LoginForm onSignInWithCredentials={signInWithCredentials} />
          <SocialsAuth onSignInWithGoogle={signInWithGoogle} />
        </div>

        <div className="flex gap-2 justify-center">
          <Link href="/signup">
            <a className="text-sky-600 text-sm underline-offset-1 hover:underline">
              Реєстрація
            </a>
          </Link>
          <span className="text-gray-600 text-sm">/</span>
          <Link href="/remind">
            <a className="text-sky-600 text-sm underline-offset-1 hover:underline">
              Забули пароль?
            </a>
          </Link>
        </div>
      </section>
    </AuthPage>
  );
};

export default LoginPage;
