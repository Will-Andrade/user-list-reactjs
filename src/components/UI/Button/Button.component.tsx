import * as Styles from './Button.styles';

interface ButtonComponentProps {
  type: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClickHandler?: () => void;
};

const ButtonComponent = ({ 
  type, 
  children, 
  onClickHandler 
}: ButtonComponentProps): JSX.Element => {
  return (
    <Styles.Button type={type} onClick={onClickHandler}>
      {children}
    </Styles.Button>
  );
};

export default ButtonComponent;
