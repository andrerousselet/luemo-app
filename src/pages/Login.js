import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center border border-slate-50 shadow-md rounded p-8">
          <input
            className="border-slate-400 rounded mb-4"
            type="email"
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            className="border-slate-400 rounded mb-4"
            type="password"
            placeholder="Senha"
            onChange={({ target }) => setPass(target.value)}
          />
          <button
            type="submit"
            className="border-slate-100 rounded p-2 bg-slate-100 w-full"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
