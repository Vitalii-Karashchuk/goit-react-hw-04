import css from '../ImageCard/ImageCard.module.css';
export default function ImageCard({ small, alt, onClick }) {
  return (
    <div className={css.imgCard} onClick={onClick}>
      <img src={small} alt={alt} />
    </div>
  );
}
