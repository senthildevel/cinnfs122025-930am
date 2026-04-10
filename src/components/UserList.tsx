import userService from "../services/user-service";
import type { User } from "../services/user-service";
import useUsers from "../hooks/useUsers";
const UserList = () => {
  const { users, error, loading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    console.log("Deleted");
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id != user.id));

    userService.delete(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    //add user
    let newUser = {
      id: 0,
      name: "John",
    };

    const originalUsers = [...users];

    userService
      .add(newUser)
      .then(({ data: savedUser }) => {
        console.log(savedUser);
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!!!!" };

    setUsers(users.map((u) => (u.id == user.id ? updatedUser : u)));

    userService
      .update(user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      <div className="container">
        <h2>App</h2>

        {error && <p className="text text-danger">{error}</p>}

        {loading && <div className="spinner-border"></div>}

        <button className="btn btn-success mb-3" onClick={addUser}>
          Add User
        </button>
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item d-flex justify-content-between">
              {user.id} - {user.name}
              <div>
                <button className="btn btn-warning me-3" onClick={() => updateUser(user)}>
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => deleteUser(user)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
