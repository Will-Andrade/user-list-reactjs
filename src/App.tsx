import UserList from "@/components/UserList";
import { useState } from "react";
import UserForm from "./components/UserForm";

interface User {
  username: string;
  age: number;
  id: string;
};

function App() {
  const [enteredData, setEnteredData] = useState<User[]>([]);

  const fetchUserDataHandler = (username: string, age: number) => {
    setEnteredData(prevState => [...prevState, { username, age, id: `user${Math.round(Math.random() * 100)}` }])
  }

  return (
    <>
      <UserForm fetchUserData={fetchUserDataHandler} />
      {enteredData.length > 0 && <UserList users={enteredData} />}
    </>
  );
};

export default App;
