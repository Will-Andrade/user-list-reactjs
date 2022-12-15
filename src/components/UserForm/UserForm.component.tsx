import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Card from "@/components/UI/Card";
import * as Styles from './UserForm.styles';

export interface UserFormProps {
  onSubmitHandler: (e: React.SyntheticEvent) => void;
  fetchUserData?: (username: string, age: number) => void;
};

const UserFormComponent = ({ onSubmitHandler }: UserFormProps): JSX.Element => {
  return (
    <Card>
      <Styles.Form onSubmit={onSubmitHandler}>
        <Input type="text" label="Username" /> 
        <Input type="number" label="Age" />
        <Button type="submit">Add User</Button>
      </Styles.Form>
    </Card>
  );
};

export default UserFormComponent;
