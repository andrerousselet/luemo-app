import Footer from '../components/Footer';
import Header from '../components/Header';
import Clients from '../services/getClients';

function Home() {
  return (
    <>
      <Header pageTitle="HOME" />
      <Clients />
      <Footer />
    </>
  );
}

export default Home;
