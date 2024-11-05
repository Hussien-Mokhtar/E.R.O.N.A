const ProductDetails = ({ product, onClose }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-4 rounded shadow-lg ">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p>{product.slug}</p>
        <p>Salary: ${product.unit_price}</p>
        <img src={product.thumbnail_img} alt={product.name} className="w-[100%] h-[25rem] text-center " />
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};


  export default ProductDetails;
  