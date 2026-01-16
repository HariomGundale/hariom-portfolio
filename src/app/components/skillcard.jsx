import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
      <div key="front">
        <h2>Front Side</h2>
        <button onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
      </div>
      <div key="back">
        <h2>Back Side</h2>
        <button onClick={() => setIsFlipped(!isFlipped)}>Flip Back</button>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;   