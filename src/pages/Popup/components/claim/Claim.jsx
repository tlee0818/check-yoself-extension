import React from 'react';
import './claim.css';

// different colors by factual correctness
const Claim = ({ claim }) => {
  console.log(claim);
  return (
    <div className="claim">
      <span>
        Claimed by <b>{claim.claimant}</b> on {claim.claimDate.slice(0, 10)}:
      </span>

      <div className="claimText">{claim.text}</div>
      {claim.claimReview !== null &&
        claim.claimReview.map((item) => (
          <div>
            {item.publisher.name} says <b>{item.textualRating}</b>
          </div>
        ))}
    </div>
  );
};

export default Claim;
