import React from 'react';
import Claim from '../claim/Claim';

const Claims = ({ claims }) => {
  return claims.map((claim, i) => <Claim claim={claim} key={i} />);
};

export default Claims;
