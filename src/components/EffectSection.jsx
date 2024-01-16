import { useEffect, useState } from 'react';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import useInput from './hooks/useinput';

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <section>
      <h3>Effects</h3>
      <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
        Открыть информацию
      </Button>
      <Modal open={modal}>
        <h3>Hellofrom Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          sapiente aperiam nulla ab esse, molestias, natus optio voluptatem
          expedita incidunt cupiditate totam placeat. Quaerat doloremque, atque
          hic nostrum incidunt voluptatem!
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase()),
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
