import React from 'react'
import { DetailsWrapper } from '../show/Details.styled';

const Details = ({status, premeried, network}) => {
  return (
    <DetailsWrapper>
      <p>Status: <span>{status}</span></p>
      <p>
        Premeried {premeried} {network ? `en ${network.name}` : null}
      </p>
    </DetailsWrapper>
  );
};

export default Details
