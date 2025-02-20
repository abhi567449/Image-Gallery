import { useState } from 'react';
import './App.css';
import Images from './Components/Gallery/Images';
import data from './Components/Gallery/data.json';

function App() {
  const [selectedId, setSelectedId] = useState(null); // Track which image is selected

  return (
    <><div className='image-div'>
      {data.map((product) => (
        <Images 
          key={product.id} 
          products={product} 
          isSelected={selectedId === product.id} 
          onClick={() => setSelectedId(product.id)} 
        />
      ))}
      </div>
    </>
  );
}

export default App;
