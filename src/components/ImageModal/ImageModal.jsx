// regular версію для модального вікна
import Modal from 'react-modal';

export default function ImageModal(regular, alt) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <img src={regular} alt={alt} />
    </div>
  );
}
