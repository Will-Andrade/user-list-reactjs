import * as Styles from './Card.styles';

interface CardComponentProps {
  children?: React.ReactNode;
}

const CardComponent = ({ children }: CardComponentProps): JSX.Element => {
  return <Styles.Card>{children}</Styles.Card>
};

export default CardComponent;
