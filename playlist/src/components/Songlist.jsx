import React from 'react'
import Songitems from './Songitems'


function Songlist({songs, onToggleFavorite, onDeleteSong}) {
  if (!songs || songs.length === 0) {
    return <div className='text-grey-500'>No songs available</div>;
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      {songs.map((song) => (
        <Songitems
          key={song.id}
          song={song}
          onToggleFavorite={onToggleFavorite}
          onDeleteSong={onDeleteSong}
        />
      ))}
    </div>
  );

}

export default Songlist;