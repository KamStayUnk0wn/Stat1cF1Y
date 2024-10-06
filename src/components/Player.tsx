import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { spotifyApi } from '../utils/spotify';

const Player = ({ token }) => {
  const [recentTracks, setRecentTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchRecentTracks = async () => {
      try {
        const data = await spotifyApi.getRecentlyPlayed(token);
        setRecentTracks(data.items.map(item => item.track));
      } catch (error) {
        console.error('Error fetching recent tracks:', error);
      }
    };

    if (token) fetchRecentTracks();
  }, [token]);

  const currentTrack = recentTracks[currentTrackIndex];

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handlePrevious = () => setCurrentTrackIndex(prev => (prev > 0 ? prev - 1 : recentTracks.length - 1));
  const handleNext = () => setCurrentTrackIndex(prev => (prev < recentTracks.length - 1 ? prev + 1 : 0));

  return (
    <div className="bg-gray-800 border-t border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-1/3">
          {currentTrack && (
            <>
              <img src={currentTrack.album.images[0]?.url} alt={currentTrack.name} className="w-14 h-14 rounded-lg mr-4" />
              <div>
                <h4 className="font-semibold text-sm">{currentTrack.name}</h4>
                <p className="text-xs text-gray-400">{currentTrack.artists[0].name}</p>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handlePrevious} className="text-gray-400 hover:text-white"><SkipBack /></button>
          <button 
            className="bg-white rounded-full p-2 text-black"
            onClick={handlePlayPause}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={handleNext} className="text-gray-400 hover:text-white"><SkipForward /></button>
        </div>
        <div className="flex items-center w-1/3 justify-end">
          <Volume2 className="text-gray-400 mr-2" />
          <div className="w-24 bg-gray-600 rounded-full h-1">
            <div className="bg-white w-2/3 h-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;