import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  let token = localStorage.getItem("token");
  console.log(token);
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        mode: "cors",
        method: "GET",
      });

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
