export default function LoadMoreBtn({ onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div>
      <button onClick={handleClick}>Load more</button>
    </div>
  );
}
