import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuthContext } from '../../contexts/auth.context';

const ProtectedPage = ({ children }) => {
  const { user, isInitializing } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (!isInitializing && !user) {
      router.push('/login');
    }
  }, [router, isInitializing, user]);

  if (isInitializing) {
    return (
      <p className="fixed text-3xl top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
        Loading...
      </p>
    );
  }

  if (!user) {
    return (
      <p className="fixed text-3xl top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
        Redirecting...
      </p>
    );
  }

  return children;
};

export default ProtectedPage;
