import * as Styles from './Input.styles';
export interface InputComponentProps {
  label: string;
  type: string;
};

const InputComponent = ({ 
  label, 
  type, 
}: InputComponentProps): JSX.Element => {
  return (
    <Styles.Label>
      {label}
      <Styles.Input type={type} name={label.toLowerCase()} />
    </Styles.Label>
  );
};

export default InputComponent
