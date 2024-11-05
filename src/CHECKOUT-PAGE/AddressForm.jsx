import React, { useState } from 'react';

const AddressForm = () => {
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address) {
      setAddresses([...addresses, address]);
      setAddress('');
    }
  };

  const handleDelete = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="+ Add new adress"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded font-bold text-xl">
          Save
        </button>
      </form>

      <ul className="mt-5">
        {addresses.map((addr, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            {addr}
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700"
            >
            Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressForm;
