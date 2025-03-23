import css from '../LoadMoreBtn/LoadMoreBtn.module.css';
export default function LoadMoreBtn({ onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className={css.btn}>
      <button className={css.btnLoadMore} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
}
