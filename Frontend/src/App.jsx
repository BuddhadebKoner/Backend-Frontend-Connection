import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [songs, setSongs] = useState([])


  // get request to fetch songs from the backend
  useEffect(() => {
    axios.get('/api/songs')
      .then((res) => {
        console.log(res.data);
        // Ensure the response data is an array
        if (Array.isArray(res.data)) {
          setSongs(res.data);
        } else {
          console.error('Data is not an array:', res.data);
        }
      })
      .catch((err) => {
        console.log('Error fetching songs:', err);
      });
  }, []);


  return (
    <>
      <h1>Songs : {songs.length}</h1>
      {songs.map((song, index) => (
        <div key={song.id}>
          <h3>{index + 1}. {song.title}</h3>
          <p>{song.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
