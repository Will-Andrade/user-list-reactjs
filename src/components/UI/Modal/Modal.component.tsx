import Button from '../Button';
import * as Styles from './Modal.styles';

interface ModalComponentProps {
  title: string;
  content: string;
  toggleModal: () => void;
};

const ModalComponent = ({ title, content, toggleModal }: ModalComponentProps): JSX.Element => {
  return (
    <>
      <Styles.Overlay onClick={toggleModal} />
      <Styles.Container>
        <Styles.Header>
          <h2>{title}</h2>
        </Styles.Header>
        <Styles.Content>
          <p>{content}</p>
        </Styles.Content>
        <Styles.Footer>
          <Button type='button' onClickHandler={toggleModal}>Okay</Button>
        </Styles.Footer>
      </Styles.Container>
    </>
  );
};

export default ModalComponent;
