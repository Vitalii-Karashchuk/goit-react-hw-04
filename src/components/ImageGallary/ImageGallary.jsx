import ImageCard from '../ImageCard/ImageCard';
// import ImageModal from '../ImageModal/ImageModal';
import css from '../ImageGallary/ImageGallary.module.css';
//
export default function ImageGallary({ items, onOpen }) {
  return (
    <div>
      <ul className={css.gallary}>
        {items.map((item) => (
          <li key={item.id}>
            <div>
              <ImageCard
                small={item.urls.small}
                alt={item.slug}
                onClick={() => onOpen(item)}
              />
              {/* <ImageModal regular={item.urls.regular} alt={item.slug} /> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
