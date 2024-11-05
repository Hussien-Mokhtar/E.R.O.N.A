import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductsDetails';

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://ecom.quick-ad.net/public/api/products?page=${page}`); 
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    
    <div className="container mx-auto p-4">
      <h1 className="text-xl mb-4">PRODUCTS</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid lg:grid-cols-6 gap-2">
          {products.map(product => (
            <li key={product.id} className="border p-4 cursor-pointer" onClick={() => setSelectedProduct(product)}>
              <img src={product.thumbnail_img} alt={product.name} className=" " />
              <h2 className="font-bold">{product.name}</h2>

            </li>
          ))}
        </ul>
      )}
      {selectedProduct && (

        <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />


      )}
      <div className="my-4 flex font-bold gap-4">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1} className='bg-black text-white py-1 px-2'>
          Previous page
        </button>
        <button onClick={() => setPage(prev => prev + 1)} className='bg-black text-white py-1 px-2'>
      Next page
        </button>
      </div>
    </div>
  );
};

export default App;
