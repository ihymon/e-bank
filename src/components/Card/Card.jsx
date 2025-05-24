import React, { useRef, useState } from 'react';
import './Card.css';

export default function Card() {
  const cardRef = useRef();
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) ${flipped ? 'rotateY(180deg)' : ''}`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = flipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
  };

  const handleClick = () => {
    setFlipped(!flipped);
    cardRef.current.style.transform = flipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
  };

  return (
    <div className="card-container">
      <div
        className={`card-3d-inner ${flipped ? 'flipped' : ''}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="shine"></div>

        <div className="card-face card-front">
          <h2 className="depth">💳 Front</h2>
          <input
            type="number"
            className="number depth"
            placeholder="0434 3535 3535 3535"
          />
        </div>

        <div className="card-face card-back">
          <h2 className="depth">🔒 Back</h2>
          <p className="depth">Secure Info</p>
        </div>
      </div>
    </div>
  );
}
