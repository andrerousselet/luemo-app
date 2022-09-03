import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import Clients from './pages/Clients';

function App() {
  return (
    <div className="container mx-auto font-light">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
