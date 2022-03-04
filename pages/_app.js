import { Layout } from '../components/Shared/';
import { AuthContextProvider } from '../contexts/auth.context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
