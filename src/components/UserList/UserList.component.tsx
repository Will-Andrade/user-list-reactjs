import User from "@/components/User";
import Card from "@/components/UI/Card";
import * as Styles from './UserList.styles';

interface User {
  username: string;
  age: number;
  id: string;
};

export type UserListComponentProps = {
  users: User[];
}

const UserListComponent = ({ users }: UserListComponentProps): JSX.Element => {
  return (
    <Card>
      <Styles.UserList>
        {users.map(({ username, age, id }) => <User username={username} age={age} key={id} />)}
      </Styles.UserList>
    </Card>
  );
};

export default UserListComponent;
