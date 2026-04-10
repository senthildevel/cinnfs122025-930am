import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService from "../services/user-service";
import type { User } from "../services/user-service";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the daa- CAling the API
    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        console.log(res.data[0].id, " - ", res.data[0].name);
        console.log(res);
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      })
      .finally(() => {});

    return () => cancel();
  }, []);

  return { users, error, loading, setUsers, setError, setLoading };
};

export default useUsers;
