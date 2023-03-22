import React from 'react';

export default function Avartar({ image, isNew }) {
  return (
    <div className="avartar">
      <img className="photo" src={image} alt="avartar" />
      {isNew && <div className="new">New</div>}
    </div>
  );
}
