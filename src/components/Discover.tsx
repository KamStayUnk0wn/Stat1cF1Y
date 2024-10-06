import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import { spotifyApi } from '../utils/spotify';

const Discover = ({ token }) => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const data = await spotifyApi.getTopTracks(token);
        setTopTracks(data.items);
      } catch (error) {
        console.error('Feauture Not Added Yet Try Again Soon Tho:', error);
      }
    };

    if (token) fetchTopTracks();
  }, [token]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Top Tracks</h2>
      <div className="grid grid-cols-3 gap-6">
        {topTracks.map((track) => (
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

export default Discover;