import Footer from '../components/Footer';
import Header from '../components/Header';

function NotFound() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <p className="text-4xl">Page Not Found!</p>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
