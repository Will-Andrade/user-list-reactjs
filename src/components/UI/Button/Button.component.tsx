import * as Styles from './Button.styles';

interface ButtonComponentProps {
  type: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode 
};

const ButtonComponent = ({ type, children }: ButtonComponentProps): JSX.Element => {
  return <Styles.Button type={type}>{children}</Styles.Button>
};

export default ButtonComponent;
