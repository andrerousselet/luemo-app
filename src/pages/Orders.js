import { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AuthContext from '../contexts/AuthContext';

function Orders() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <p className="break-all">{user && user.displayName}</p>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
