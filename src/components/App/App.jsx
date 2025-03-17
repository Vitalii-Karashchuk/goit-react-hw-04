import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
// import css from '../App/App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallary from '../ImageGallary/ImageGallary';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { fetchImg } from '../../request';

//
export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async (newSearch) => {
    try {
      setError(false);
      setIsLoader(true);
      setPhotos([]);
      const data = await fetchImg(newSearch);
      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <>
      <ErrorMessage error={error} />
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-right" />
      <ImageGallary items={photos} />
      {isLoader && <Loader />}
      <LoadMoreBtn />
    </>
  );
}
