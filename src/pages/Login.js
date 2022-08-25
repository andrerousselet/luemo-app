import { useState, useContext } from 'react';
import logo from '../assets/luemo-logo.png';
import AuthContext from '../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [newUser, setNewUser] = useState(false);
  const { register, login, errors } = useContext(AuthContext);

  const cleanInputs = () => {
    setEmail('');
    setPass('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser) {
      register(email, pass);
      cleanInputs();
    }
    if (!newUser) {
      login(email, pass);
      cleanInputs();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center border border-slate-50 shadow-md rounded px-8 pt-8 pb-4 w-[300px] sm:w-[400px]">
        <img className="w-[170px] mb-8" src={logo} alt="lu-e-mo-logo" />
        {errors && (
          <p className="bg-red-50 text-red-600 text-xs mb-4 p-1 rounded w-full text-center">{errors}</p>
        )}
        <input
          className="border-slate-300 rounded w-full mb-4"
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          className="border-slate-300 rounded w-full mb-4"
          type="password"
          placeholder="Senha"
          value={pass}
          onChange={({ target }) => setPass(target.value)}
        />
        <button
          type="submit"
          className="border-slate-100 rounded p-2 bg-slate-100 w-full mb-4"
        >
          {newUser ? 'Cadastrar' : 'Entrar'}
        </button>
        <button
          type="button"
          className="text-xs"
          onClick={() => setNewUser(!newUser)}
        >
          {!newUser ? (
            <p>
              Novo usuário? Cadastre-se
              {' '}
              <strong className="underline decoration-indigo-700 text-indigo-700">aqui!</strong>
            </p>
          ) : (
            <p>
              Já possui conta? Faça login
              {' '}
              <strong className="underline decoration-indigo-700 text-indigo-700">aqui!</strong>
            </p>
          )}
        </button>
      </div>
    </form>
  );
}
