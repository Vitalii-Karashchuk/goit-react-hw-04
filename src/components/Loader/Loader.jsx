import PropagateLoader from 'react-spinners/PropagateLoader';

//
export default function Loader() {
  const override = {
    display: 'block',
    margin: '0 auto',
  };
  return (
    <div>
      <PropagateLoader
        color="#248d84"
        size={15}
        speedMultiplier={1.0}
        cssOverride={override}
      />
    </div>
  );
}
