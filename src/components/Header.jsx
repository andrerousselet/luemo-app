import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/luemo-logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Header({ pageTitle }) {
  const [isNavbar, setIsNavbar] = useState(false);
  return (
    <header className="container fixed top-0 bg-slate-50 shadow">
      <section className="flex justify-between items-center px-4 py-2">
        {!isNavbar 
          ? <MenuIcon className="h-6 w-6 opacity-75" onClick={() => setIsNavbar(!isNavbar)} />
          : <XIcon className="h-6 w-6 opacity-75" onClick={() => setIsNavbar(!isNavbar)} />
        }
        <h1 className="text-xl">{pageTitle}</h1>
        <img className="w-12" src={logo} alt="lu-e-mo-logo" />
      </section>
      <nav className={!isNavbar ? "hidden" : "flex justify-around"}>
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
