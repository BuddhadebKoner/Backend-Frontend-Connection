import React, { useEffect, useState } from 'react';
import Skeleton from './components/Skeleton'; 

function App() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const api = import.meta.env.VITE_HINDI_SONG_API;

  useEffect(() => {
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setSongs(data);
        } else {
          setError('Data is not in the expected format');
        }
      })
      .catch((err) => {
        setError('Error fetching songs');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [api]);


  return (
    <div className="app">
      <h1 className="Hero-Heading">Hindi Songs</h1>
      <div className="song-list">
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          [...Array(songs.length || 10)].map((_, index) => <Skeleton key={index} />)
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
