import Link from 'next/link';

import { Container } from '.';

const Navbar = ({ isAuth, signOutButton }) => {
  return (
    <nav className="flex items-center h-12 border border-b-gray-200 bg-gray-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold">djinni</a>
          </Link>
          {isAuth && signOutButton}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
