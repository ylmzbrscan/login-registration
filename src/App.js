import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  // Function to add a user to the list
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      {currentUser ? (
        <div>
          <h1>Welcome, {currentUser.fullName}!</h1>
          <button onClick={() => setCurrentUser(null)}>Logout</button>
          <UserList users={users} />
        </div>
      ) : (
        <div>
          <Login users={users} setUser={setCurrentUser} />
          <Register users={users} addUser={addUser} />
          <UserList users={users} />
        </div>
      )}
    </div>
  );
}

export default App;
