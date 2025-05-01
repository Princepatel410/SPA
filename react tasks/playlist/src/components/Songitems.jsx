import React from 'react'

function Songitems({song , onToggleFavorite , onDeleteSong}) {
  return (
    <div className='border p-4 rounded shadow-sm flex justify-between items-center'>
        <div className='space-y-1'>
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <p className='text-sm text-gray-600'>{song.artist} • {song.year}</p>
        </div>
        <div className="flex gap-3">
            <button 
              onClick={()=>onToggleFavorite(song.id)} 
              className='text-yellow-500 hover:text-yellow-600 px-2 py-1'
            >
                {song.isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
            <button 
              onClick={()=>onDeleteSong(song.id)} 
              className='text-red-500 hover:text-red-600 px-2 py-1'
            >
                Delete
            </button>
        </div>
    </div>
  )
}

export default Songitems;