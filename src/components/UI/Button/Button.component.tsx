interface ButtonComponentProps {
  type: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode 
};

const ButtonComponent = ({ type, children }: ButtonComponentProps): JSX.Element => {
  return <button type={type}>{children}</button>
};

export default ButtonComponent;
