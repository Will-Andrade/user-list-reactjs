interface ModalComponentProps {
  title: string;
  content: string;
}

const ModalComponent = ({ title, content }: ModalComponentProps): JSX.Element => {
  return <div>
    <div>
      <p>{title}</p>
    </div>
    <div>{content}</div>
  </div>
};

export default ModalComponent;
