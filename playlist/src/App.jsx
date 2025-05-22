import React, { useState, useEffect } from "react";
import Songform from "./components/Songform";
import Songlist from "./components/Songlist";

function App() {
  const [songs, setsongs] = useState(() => {
    const savedSongs = localStorage.getItem("songs");
    return savedSongs ? JSON.parse(savedSongs) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]);

  const addsong = (song) => {
    const newSong = {
      ...song,
      id: Date.now(),
      isFavorite: false,
    };
    setsongs([...songs, newSong]);
    alert(`Song "${song.title}" by ${song.artist} added successfully!`);
  };

  const toggleFavorite = (id) => {
    setsongs(
      songs.map((song) =>
        song.id === id ? { ...song, isFavorite: !song.isFavorite } : song
      )
    );
  };
  
  const deletesong = (id) => {
    setsongs(songs.filter((song) => song.id !== id));
  };
  
  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };
  
  const filteredSongs = showFavorites
    ? songs.filter((song) => song.isFavorite)
    : songs;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md mx-auto p-4 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center"> Playlist Creator</h1>
        <Songform Onaddsong={addsong} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={toggleShowFavorites}
        >
          {showFavorites ? "Show All Songs" : "Show Favorite Songs"}
        </button>
        <Songlist
          songs={filteredSongs}
          onToggleFavorite={toggleFavorite}
          onDeleteSong={deletesong}
        />
      </div>
    </div>
  );
}

export default App;




