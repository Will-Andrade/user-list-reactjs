import UserComponent, { UserProps } from "./User.component";

const User = ({ username, age }: UserProps): JSX.Element => {
  return <UserComponent username={username} age={age} />
};

export default User;
