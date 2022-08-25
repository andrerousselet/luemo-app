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
      <nav className={!isNavbar ? 'hidden' : 'flex justify-around'}>
        <Link to="/menu">
          <div className="">Menu</div>
        </Link>
        <Link to="/clients">
          <div className="">Clients</div>
        </Link>
        <Link to="/orders">
          <div className="">Orders</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

// Header.propTypes = {
//   pageTitle: PropTypes.string.isRequired,
// };
