import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/service";
import "../element.css";
import SkeletonProfile from "../skeleton/skeletonUser";
const User = () => {
  const [users, setUsers] = useState();
  const handleGetUsers = async () => {
    const users = await getUsers();
    console.log(users);
    setUsers(users.slice(0, 5));
  };
  useEffect(() => {
    setTimeout(() => {
      handleGetUsers();
    }, 3000);
  }, []);

  return (
    <div className="user-wrapper">
      <div>
        <h2>user</h2>
        <hr />
      </div>
      {users
        ? users.map((user) => (
            <div key={user.id} className="user">
              <h4>{user.name}</h4>
              <p>{user.username}</p>
              <a href={user.email}>{user.email}</a>
            </div>
          ))
        : [1, 2, 3, 4, 5].map(() => <SkeletonProfile />)}
    </div>
  );
};

export default User;
