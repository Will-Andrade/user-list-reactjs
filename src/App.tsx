import { useState } from "react";
import UserForm from "./components/UserForm";

function App() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState(0);

  const fetchUserDataHandler = (username: string, age: number) => {
    setEnteredUsername(username);
    setEnteredAge(age);
  }

  console.log(enteredUsername, enteredAge);

  return (
    <UserForm fetchUserData={fetchUserDataHandler} />
  );
};

export default App;
