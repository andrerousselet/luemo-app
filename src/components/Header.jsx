import { useState } from 'react';
import logo from '../assets/luemo-logo.png';
import Navbar from './MenuNavbar';

function Header({ pageTitle }) {
  const [isNavbar, setIsNavbar] = useState(false);
  return (
    <header className="container fixed top-0 bg-slate-50 shadow">
      <section className="flex justify-between items-center px-4 py-2">
        {!isNavbar ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            onClick={() => setIsNavbar(!isNavbar)}
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            onClick={() => setIsNavbar(!isNavbar)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <h1 className="text-xl">{pageTitle}</h1>
        <img className="w-12" src={logo} alt="lu-e-mo-logo" />
      </section>
      <Navbar isNavbar={isNavbar} />
    </header>
  );
}

export default Header;
