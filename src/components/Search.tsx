import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = ({ token }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setSearchResults(data.tracks.items);
    } catch (error) {
      console.error('Error searching tracks:', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Search</h2>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex items-center bg-gray-800 rounded-full p-2">
          <SearchIcon className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for tracks"
            className="bg-transparent border-none focus:outline-none text-white w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      <div className="grid grid-cols-3 gap-6">
        {searchResults.map((track) => (
          <div key={track.id} className="bg-gray-800 p-4 rounded-lg">
            <img src={track.album.images[0]?.url} alt={track.name} className="w-full aspect-square rounded-lg mb-4" />
            <h3 className="font-semibold">{track.name}</h3>
            <p className="text-sm text-gray-400">{track.artists[0].name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;