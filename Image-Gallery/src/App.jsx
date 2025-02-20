import { useState } from 'react';
import './App.css';
import Images from './Components/Gallery/Images';
import data from './Components/Gallery/data.json';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null); // Store selected product

  return (
    <>
      {/* Image List */}
      <div className='image-div'>
        {data.map((product) => (
          <Images 
            key={product.id} 
            products={product} 
            onClick={() => setSelectedProduct(product)} 
          />
        ))}
      </div>

      {/* Fixed Position Popup for Selected Image */}
      {selectedProduct && (
        <div className="selected-Image">
          <img 
            className="Image-selected" 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
          />
            <p>{selectedProduct.name}</p>
          <p>{selectedProduct.description}</p>
          
        </div>
      )}
    </>
  );
}

export default App;
