import React from 'react';

function Images({ products, onClick }) {
  const { name, image } = products;

  return (
    <div>
      <img 
        className="Images" 
        src={image} 
        alt={name} 
        onClick={onClick} 
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
}

export default Images;
