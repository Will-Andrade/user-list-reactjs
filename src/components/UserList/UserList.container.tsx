import UserListComponent, { UserListComponentProps } from "./UserList.component";

const UserList = ({ users }: UserListComponentProps): JSX.Element => {
  return <UserListComponent users={users} />;
};

export default UserList;
