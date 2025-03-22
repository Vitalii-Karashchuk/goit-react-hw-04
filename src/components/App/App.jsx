import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
// import css from '../App/App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallary from '../ImageGallary/ImageGallary';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { fetchImg } from '../../request';

//
export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchData, setSearchData] = useState('');
  const [page, setPage] = useState(1);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  Modal.setAppElement('#yourAppElement');

  const onSubmit = (newSearch) => {
    setSearchData(newSearch);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (searchData === '') {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoader(true);
        const data = await fetchImg(searchData, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch {
        setError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getData();
  }, [searchData, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  function openModal() {
    setmodalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setmodalIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-right" />
      <ImageGallary items={photos} />
      {isLoader && <Loader />}
      {photos.length > 0 && isLoader && <LoadMoreBtn onClick={onClick} />}
      {error && <ErrorMessage />}
      <ImageModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      />
      ;
    </>
  );
}
