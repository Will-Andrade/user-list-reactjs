import UserList from "./components/UserList";
import { useState } from "react";
import UserForm from "./components/UserForm";
import { Container } from "./components/styles";

interface User {
  username: string;
  age: number;
  id: string;
};

function App() {
  const [enteredData, setEnteredData] = useState<User[]>([]);

  const fetchUserDataHandler = (username: string, age: number): void => {
    setEnteredData(prevState => 
      [...prevState, 
        { username, age, id: `user${Math.round(Math.random() * 100)}` }
      ]
    );
  };

  return (
    <Container>
      <UserForm fetchUserData={fetchUserDataHandler} />
      {enteredData.length > 0 && <UserList users={enteredData} />}
    </Container>
  );
};

export default App;
