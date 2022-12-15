import Modal from "@/components/UI/Modal";
import { useState } from "react";
import UserFormComponent, { UserFormProps } from "./UserForm.component";

type UserFormType = Pick<UserFormProps, 'fetchUserData'>;

type ErrorType = {
  title: string;
  content: string;
};

const UserForm = ({ fetchUserData }: UserFormType): JSX.Element => {
  const [error, setError] = useState<ErrorType>();
  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (!e.target.username.value.trim().length && !e.target.age.value.trim().length) {
      setError({ 
        title: "Form Error!", 
        content:"Please enter a valid name and age (non-empty values)." 
      });
      return
    }
    
    if (Number(e.target.age.value) < 0 || !e.target.age.value.trim().length) {
      setError({
        title: "Age error!",
        content: "Please enter a valid age (>0)."
      });
      return
    }

    if (!e.target.username.value.trim().length) {
      setError({
        title: "Username error!",
        content: "Please enter a valid username."
      });
      return
    }

    fetchUserData(e.target.username.value, e.target.age.value)
    e.target.reset();
    e.target.username.focus();
  };

  const toggleErrorHandler = (): void => {
    setError(undefined);
  }

  return (
    <>
      {error && <Modal 
        title={error.title} 
        content={error.content} 
        toggleModal={toggleErrorHandler} 
      />}
      <UserFormComponent onSubmitHandler={onSubmitHandler} />
    </>
  );
};

export default UserForm;
