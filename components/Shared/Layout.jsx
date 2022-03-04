import Head from 'next/head';
import { HiOutlineLogin } from 'react-icons/hi';

import { Navbar, Container } from './';
import { useAuthContext } from '../../contexts/auth.context';

const Layout = ({ children }) => {
  const { user, signOutFromAccount } = useAuthContext();

  return (
    <>
      <Head>
        <title>Djinni Clone</title>
        <meta name="description" content="Djinni auth practice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        isAuth={!!user}
        signOutButton={
          <button onClick={signOutFromAccount}>
            <HiOutlineLogin className="text-xl" />
          </button>
        }
      />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
