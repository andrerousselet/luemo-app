import { useState } from 'react';
import {
  collection, doc, getDocs, addDoc, updateDoc, Timestamp, deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [id, setId] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const clientsCollectionRef = collection(db, 'clientes');

  const getClients = async () => {
    const data = await getDocs(clientsCollectionRef);
    const clientsData = data.docs.map((document) => (
      { ...document.data(), id: document.id }
    ));
    setClients(clientsData);
  };

  const createClient = async () => {
    await addDoc(
      clientsCollectionRef,
      { name, surname, createdAt: Timestamp.now() },
    );
    setName('');
    setSurname('');
    setId('');
    setIsUpdating(false);
    // await getClients();
  };

  const loadClientInfo = (client) => {
    setIsUpdating(true);
    setName(client.name);
    setSurname(client.surname);
    setId(client.id);
  };

  const updateClient = async () => {
    const clientDoc = doc(db, 'clientes', id);
    const changes = { name, surname };
    await updateDoc(clientDoc, changes);
    setName('');
    setSurname('');
    setId('');
    setIsUpdating(false);
    // await getClients();
  };

  const deleteClient = async (clientId) => {
    const clientDoc = doc(db, 'clientes', clientId);
    await deleteDoc(clientDoc);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center mb-4">
        <input
          className="mb-2"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          className="mb-2"
          type="text"
          placeholder="Sobrenome"
          value={surname}
          onChange={({ target }) => setSurname(target.value)}
        />
        <div>
          <button
            className={isUpdating ? 'hidden' : 'border rounded p-2 bg-slate-200'}
            type="button"
            onClick={createClient}
          >
            CREATE CLIENT
          </button>
          <button
            className={!isUpdating ? 'hidden' : 'border rounded p-2 bg-slate-200'}
            type="button"
            onClick={updateClient}
          >
            EDIT CLIENT
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul>
          {clients
            && clients
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((client) => (
                <li key={client.id}>
                  {`${client.name} ${client.surname}`}
                  <button
                    className="border rounded p-1 bg-slate-100"
                    type="button"
                    onClick={() => loadClientInfo(client)}
                  >
                    Editar
                  </button>
                  <button
                    className="border rounded p-1 bg-slate-100"
                    type="button"
                    onClick={() => deleteClient(client.id)}
                  >
                    Deletar
                  </button>
                </li>
              ))}
        </ul>
        <button
          className="border rounded p-2 bg-slate-200 mt-4"
          type="button"
          onClick={getClients}
        >
          GET CLIENTS
        </button>
      </div>
    </div>
  );
}
