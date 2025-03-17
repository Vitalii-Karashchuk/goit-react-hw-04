export default function ImageCard({ regular, alt }) {
  return (
    <div>
      <img src={regular} alt={alt} />
    </div>
  );
}
