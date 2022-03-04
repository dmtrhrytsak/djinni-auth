import Head from 'next/head';

import { ProtectedPage } from '../components/Routes';
import { useAuthContext } from '../contexts/auth.context';

export default function Home() {
  const { user } = useAuthContext();

  return (
    <ProtectedPage>
      <section>
        <div>
          <section className="py-5">
            <h3>
              Hello, <span className="text-sky-600">{user?.email}</span>!
            </h3>
          </section>
        </div>
      </section>
    </ProtectedPage>
  );
}
