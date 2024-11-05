import { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";

export default function BlogSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://ecom.quick-ad.net/public/api/blogs/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: searchTerm }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch} className='grid grid-cols-2 lg:ml-0 ml-20'>
                <input 
                    type="text" 
                    className="w-full text-black border-2 border-gray-300 rounded-s-md focus:ring focus:ring-orange-500" 
                    placeholder="Search..." 
                    required 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button 
                    type="submit" 
                    className="w-12 h-12 bg-black text-white rounded-e-md flex justify-center items-center focus:ring-orange-200 focus:ring" 
                >
                    <IoSearchSharp className="w-5 h-5" />
                </button>
            </form>
            <div>
                {results.length > 0 && (
                    <ul>
                        {results.map((item) => (
                            <li key={item.id}>{item.title}</li> 
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
