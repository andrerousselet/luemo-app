import { useState } from 'react';
import logo from '../assets/luemo-logo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Navbar from './MenuNavbar';

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
      <Navbar isNavbar={isNavbar} />
    </header>
  );
}

export default Header;
