export default function ImageCard({ small, alt }) {
  return (
    <div>
      <img src={small} alt={alt} />
    </div>
  );
}
