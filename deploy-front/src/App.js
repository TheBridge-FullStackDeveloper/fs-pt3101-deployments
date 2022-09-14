import { useEffect, useState } from "react";
import { getUsers } from "./services";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getUsers();
      setUsers(result.data);
    };

    fetchUsers();
  }, []);

  return (
    <section>
      <h1>App</h1>
      <br />
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <section key={index}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </section>
        ))}
      </ul>
    </section>
  );
};

export default App;
