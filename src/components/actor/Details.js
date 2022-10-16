import React from 'react'

const Details = ({status, premeried, network}) => {
  return (
    <div>
      <p>Status: <span>{status}</span></p>
      <p>
        Premeried {premeried} {network ? `en ${network.name}` : null}
      </p>
    </div>
  );
};

export default Details
