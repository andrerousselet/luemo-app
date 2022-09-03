import Footer from '../components/Footer';
import Header from '../components/Header';
import ClientsData from '../services/getClients';

function Clients() {
  return (
    <>
      <Header />
      <ClientsData />
      <Footer />
    </>
  );
}

export default Clients;
