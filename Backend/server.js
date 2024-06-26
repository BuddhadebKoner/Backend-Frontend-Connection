import express from 'express';
import cors from 'cors';

const app = express();

// Define your whitelist
const whitelist = ['http://localhost:5173', 'https://hindisong-frontend.onrender.com'];

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Use CORS with the specified options
app.use(cors(corsOptions));

// Your existing routes
app.get('/', (req, res) => {
  const Songs = [
    {
      "id": 1,
      "title": "Tum Hi Ho",
      "content": "Aashiqui 2",
      "artist": "Arijit Singh",
      "duration": "4:22",
      "releaseYear": 2013,
      "link": "https://www.youtube.com/watch?v=IJq0yyWug1k",
    },
    {
      "id": 2,
      "title": "Channa Mereya",
      "content": "Ae Dil Hai Mushkil",
      "artist": "Arijit Singh",
      "duration": "4:49",
      "releaseYear": 2016,
      "link": "https://www.youtube.com/watch?v=bzSTpdcs-EI",
    },
    {
      "id": 3,
      "title": "Kal Ho Naa Ho",
      "content": "Kal Ho Naa Ho",
      "artist": "Sonu Nigam",
      "duration": "5:20",
      "releaseYear": 2003,
      "link": "https://www.youtube.com/watch?v=g0eO74UmRBs",
    },
    {
      "id": 4,
      "title": "Tujh Mein Rab Dikhta Hai",
      "content": "Rab Ne Bana Di Jodi",
      "artist": "Roop Kumar Rathod",
      "duration": "4:40",
      "releaseYear": 2008,
      "link": "https://www.youtube.com/watch?v=qoq8B8ThgEM",
    },
    {
      "id": 5,
      "title": "Tera Ban Jaunga",
      "content": "Kabir Singh",
      "artist": "Akhil Sachdeva, Tulsi Kumar",
      "duration": "3:56",
      "releaseYear": 2019,
      "link": "https://www.youtube.com/watch?v=Qdz5n1Xe5Qo",
    },
    {
      "id": 6,
      "title": "Ghungroo",
      "content": "War",
      "artist": "Arijit Singh, Shilpa Rao",
      "duration": "5:02",
      "releaseYear": 2019,
      "link": "https://www.youtube.com/watch?v=qFkNATtc3mc",
    },
    {
      "id": 7,
      "title": "Bekhayali",
      "content": "Kabir Singh",
      "artist": "Sachet Tandon",
      "duration": "6:11",
      "releaseYear": 2019,
      "link": "https://www.youtube.com/watch?v=VOLKJJvfAbg",
    },
    {
      "id": 8,
      "title": "Kabira",
      "content": "Yeh Jawaani Hai Deewani",
      "artist": "Tochi Raina, Rekha Bhardwaj",
      "duration": "4:10",
      "releaseYear": 2013,
      "link": "https://www.youtube.com/watch?v=lwLVJ0E8gN4",
    },
    {
      "id": 9,
      "title": "Ae Dil Hai Mushkil",
      "content": "Ae Dil Hai Mushkil",
      "artist": "Arijit Singh",
      "duration": "4:29",
      "releaseYear": 2016,
      "link": "https://www.youtube.com/watch?v=6FURuLYrR_Q",
    }
  ];
  res.send(Songs);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
