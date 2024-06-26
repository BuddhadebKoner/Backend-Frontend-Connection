import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState('');

  // get request to fetch songs from the backend
  useEffect(() => {
    axios.get('https://hindisong-backend.onrender.com/api/songs')
      .then((res) => {
        console.log(res.data);
        // Ensure the response data is an array
        if (Array.isArray(res.data)) {
          setSongs(res.data);
        } else {
          console.error('Data is not an array:', res.data);
          setError('Data Is not in the Expected Format');
        }
      })
      .catch((err) => {
        console.log('Error fetching songs:', err);
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
            <a key={song.id} href={song.link} target='_blank' rel='noopener noreferrer'>
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
