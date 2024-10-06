import React from 'react'

const MainContent = () => {
  const featuredPlaylists = [
    { id: 1, name: "Today's Top Hits", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
    { id: 2, name: "RapCaviar", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop" },
    { id: 3, name: "All Out 2010s", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop" },
    { id: 4, name: "Rock Classics", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop" },
    { id: 5, name: "Chill Hits", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop" },
    { id: 6, name: "Viva Latino", image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=300&h=300&fit=crop" },
  ]

  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-gray-900 p-8 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6">Good afternoon</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {featuredPlaylists.slice(0, 6).map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 bg-opacity-40 rounded-xl p-4 flex items-center hover:bg-opacity-60 transition-all cursor-pointer">
            <img src={playlist.image} alt={playlist.name} className="w-16 h-16 rounded-lg mr-4" />
            <span className="font-semibold text-sm">{playlist.name}</span>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4">Made for you</h3>
      <div className="grid grid-cols-6 gap-6">
        {featuredPlaylists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 bg-opacity-40 rounded-xl p-4 hover:bg-opacity-60 transition-all cursor-pointer">
            <img src={playlist.image} alt={playlist.name} className="w-full aspect-square rounded-lg mb-4" />
            <h4 className="font-semibold text-sm mb-1">{playlist.name}</h4>
            <p className="text-xs text-gray-400">Playlist • Spotify</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainContent