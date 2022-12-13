export interface InputComponentProps {
  label: string;
  type: string;
  onChangeHandler: () => void;
};

const InputComponent = ({ 
  label, 
  type, 
  onChangeHandler 
}: InputComponentProps): JSX.Element => {
  return (
    <label>
      {label}
      <input type={type} onChange={onChangeHandler} />
    </label>
  );
};

export default InputComponent
