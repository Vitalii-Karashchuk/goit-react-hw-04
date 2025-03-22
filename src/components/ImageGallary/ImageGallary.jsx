// import ImageCard from '../ImageCard/ImageCard';
import css from '../ImageGallary/ImageGallary.module.css';
//
export default function ImageGallary({ items }) {
  return (
    <div>
      <ul className={css.gallary}>
        {items.map((item) => (
          <li key={item.id}>
            <div>
              <img className={css.img} src={item.urls.small} alt={item.slug} />
              {/* <ImageCard small={item.urls.small} alt={item.slug} /> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
