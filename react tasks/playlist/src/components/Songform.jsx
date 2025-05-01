import React ,{useState} from 'react'

function Songform({Onaddsong}) {
  const [songdata,setsongdata] = useState({
    title: '',
    artist: '',
    year: '',
    isFavorite: false,
  });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setsongdata({ ...songdata, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!songdata.title || !songdata.artist || !songdata.year) {
            alert('Please fill in all fields');
            return;
        }
        Onaddsong(songdata);
        setsongdata({
            title: '',
            artist: '',
            year: '',
            isFavorite: false,
        });
    };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
        <input
            type="text"
            name="title"
            value={songdata.title}
            onChange={handleChange}
            placeholder="Song Title"
            className="border p-2 w-full rounded"
        />
        <input
            type="text"
            name="artist"
            value={songdata.artist}
            onChange={handleChange}
            placeholder="Artist"
            className="border p-2 w-full rounded"
        />
        <input
            type="text"
            name="year"
            value={songdata.year}
            onChange={handleChange}
            placeholder="Year"
            className="border p-2 w-full rounded"
        />
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
            Add Song
        </button>
    </form>
  )
}

export default Songform;