import InputComponent, { InputComponentProps } from "./Input.component";

const Input = ({ label, type, onChangeHandler }: InputComponentProps): JSX.Element => {
  return <InputComponent label={label} type={type} onChangeHandler={onChangeHandler} />
};

export default Input;
