import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ regular, alt, isOpen, onRequestClose }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: ' #312e2e',
    },
  };

  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>{regular && <img src={regular} alt={alt} />}</div>
    </Modal>
  );
}
