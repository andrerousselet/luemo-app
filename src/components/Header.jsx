import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline';
// import PropTypes from 'prop-types';
import AuthContext from '../contexts/AuthContext';

// function Header({ pageTitle }) {
function Header() {
  const [isNavbar, setIsNavbar] = useState(false);
  const { logout } = useContext(AuthContext);
  return (
    <header className="container fixed top-0 bg-slate-50 shadow">
      <section className="flex justify-between items-center px-4 py-2">
        {
          !isNavbar
            ? <MenuIcon className="h-6 w-6 opacity-75" onClick={() => setIsNavbar(!isNavbar)} />
            : <XIcon className="h-6 w-6 opacity-75" onClick={() => setIsNavbar(!isNavbar)} />
        }
        {/* <h1 className="text-xl">{pageTitle}</h1> */}
        <LogoutIcon className="h-6 w-6 opacity-75" onClick={logout} />
      </section>
      <nav className={!isNavbar ? 'hidden' : 'flex flex-col'}>
        <Link
          to="/menu"
          className="flex justify-center items-center m-1"
        >
          <div className="border-b-[1px]">MENU</div>
        </Link>
        <Link
          to="/clients"
          className="flex justify-center items-center m-1"
        >
          <div className="border-b-[1px]">CLIENTS</div>
        </Link>
        <Link
          to="/orders"
          className="flex justify-center items-center m-1"
        >
          <div className="border-b-[1px]">ORDERS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

// Header.propTypes = {
//   pageTitle: PropTypes.string.isRequired,
// };
