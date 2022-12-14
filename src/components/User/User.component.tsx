import * as Styles from './User.styles';

export interface UserProps {
  username: string;
  age: number;
}

const UserComponent = ({ username, age }: UserProps): JSX.Element => {
  return (
    <Styles.User><p>{username}, {age} years old.</p></Styles.User>
  );
};

export default UserComponent;
