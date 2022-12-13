import Input from "./components/Input";
import User from "./components/User";


function App() {
  return (
    <>
      <User username="Willian Andrade" age={23} />
      <Input type="text" label="Username" onChangeHandler={() => console.log('username works!')} /> 
      <Input type="number" label="Age" onChangeHandler={() => console.log('age works!')} />
    </>
  );
};

export default App;
