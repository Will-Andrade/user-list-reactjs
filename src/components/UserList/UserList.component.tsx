import User from "@/components/User";

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
    <>
      <ul>
        {users.map(({ username, age, id }) => <User username={username} age={age} key={id} />)}
      </ul>
    </>
  );
};

export default UserListComponent;
