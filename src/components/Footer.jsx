import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <footer className="container fixed bottom-0 px-2 py-1 flex justify-between items-center bg-slate-50">
      <div className="opacity-75">
        <h6 className="text-sm">
          &copy; Copyright 2022,
        </h6>
        <p className="text-xs">Lu &amp; Mo Comidinhas</p>
      </div>
      <SocialMedia />
    </footer>
  );
}

export default Footer;
