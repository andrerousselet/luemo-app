import logo from '../assets/luemo-logo.png';

function Header() {
  return (
    <header className="container fixed top-0 px-2 py-1 flex justify-between items-center bg-slate-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <img className="w-12" src={logo} alt="lu-e-mo-logo" />
    </header>
  );
}

export default Header;
