export interface InputComponentProps {
  label: string;
  type: string;
};

const InputComponent = ({ 
  label, 
  type, 
}: InputComponentProps): JSX.Element => {
  return (
    <label>
      {label}
      <input type={type} name={label.toLowerCase()} />
    </label>
  );
};

export default InputComponent
