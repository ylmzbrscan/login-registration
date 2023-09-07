import React from "react";
import "./UserList.css";

function UserList({ users }) {
  return (
    <div className="user-list-container">
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="user-list-item">
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
