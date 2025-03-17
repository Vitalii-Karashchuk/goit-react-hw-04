import { useEffect, useState } from 'react';
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
  const [searchData, setSearchData] = useState('');
  const [page, setPage] = useState(1);

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
        setPhotos([]);
        const data = await fetchImg(searchData, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
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

  return (
    <>
      <ErrorMessage error={error} />
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-right" />
      <ImageGallary items={photos} />
      {isLoader && <Loader />}
      {photos.length > 0 && <LoadMoreBtn onClick={onClick} />}
    </>
  );
}
