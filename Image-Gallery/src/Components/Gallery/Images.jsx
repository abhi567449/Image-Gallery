import React from 'react';

function Images({ products, isSelected, onClick }) {
  const { name, description, image } = products;

  return (
    <div>
      <img 
        className="Images" 
        src={image} 
        alt={name} 
        onClick={onClick} // Set selected image when clicked
        style={{ cursor: 'pointer' }} 
      />

      {/* Only show div when isSelected is true */}
      <div 
        className="selected-Image" 
        style={{ visibility: isSelected ? 'visible' : 'hidden' }}
      >
        <img 
        className="Image-selected" 
        src={image} 
        alt={name} 
        onClick={onClick} // Set selected image when clicked
        style={{ cursor: 'pointer' }} 
      />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Images;
