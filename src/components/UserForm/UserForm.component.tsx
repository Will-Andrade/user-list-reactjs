import ButtonComponent from "@/components/UI/Button";
import Input from "@/components/UI/Input";

export interface UserFormProps {
  onSubmitHandler: (e: React.SyntheticEvent) => void;
  fetchUserData?: (username: string, age: number) => void;
};

const UserFormComponent = ({ onSubmitHandler }: UserFormProps): JSX.Element => {
  return (
    <form onSubmit={onSubmitHandler}>
      <Input type="text" label="Username" /> 
      <Input type="number" label="Age" />
      <ButtonComponent type="submit">Add User</ButtonComponent>
    </form>
  );
};

export default UserFormComponent;
