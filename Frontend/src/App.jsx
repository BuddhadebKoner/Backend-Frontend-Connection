import React, { useEffect, useState } from 'react';

function App() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState('');

    const api = import.meta.env.VITE_HINDI_SONG_API

  useEffect(() => {
    fetch(api)
      .then((response) => {
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data:', data);
        if (Array.isArray(data)) {
          setSongs(data);
        } else {
          console.error('Data is not an array:', data);
          setError('Data is not in the expected format');
        }
      })
      .catch((err) => {
        console.error('Error fetching songs:', err);
        setError('Error fetching songs');
      });
  }, []);

  return (
    <div className="app">
      <h1>Hindi Songs</h1>
      <div className="song-list">
        {error ? (
          <p>{error}</p>
        ) : (
          songs.map((song, index) => (
            <a key={song.id} href={song.link} target="_blank" rel="noopener noreferrer">
              <div className="song-card">
                <h3>{index + 1}. {song.title}</h3>
                <p>Movie: {song.content}</p>
                <p>Artist: {song.artist}</p>
                <p>Duration: {song.duration}</p>
                <p>Release Year: {song.releaseYear}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
