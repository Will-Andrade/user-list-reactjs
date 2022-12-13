import UserFormComponent, { UserFormProps } from "./UserForm.component";

type UserFormType = Pick<UserFormProps, 'fetchUserData'>;

const UserForm = ({ fetchUserData }: UserFormType): JSX.Element => {
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!e.target.username.value.trim().length && !e.target.age.value.trim().length) {username
      return console.log('Please enter a valid name and age (non-empty values).');
    }
    
    if (Number(e.target.age.value) < 0 || !e.target.age.value.trim().length) {
      return console.log('Please enter a valid age (>0).');
    }

    if (!e.target.username.value.trim().length) {
      return console.log('Please enter a valid name.');
    }

    fetchUserData(e.target.username.value, e.target.age.value)
    e.target.reset();
  };

  return <UserFormComponent onSubmitHandler={onSubmitHandler} />;
};

export default UserForm;