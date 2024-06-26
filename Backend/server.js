import express from 'express';

const app = express();

// app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('First Backend API');
// });

// get a list of 5 Hindi songs
app.get('/api/songs', (req, res) => {
    const Songs = [
        {
            "id": 1,
            "title": "Tum Hi Ho",
            "content": "Aashiqui 2"
        },
        {
            "id": 2,
            "title": "Channa Mereya",
            "content": "Ae Dil Hai Mushkil"
        },
        {
            "id": 3,
            "title": "Kal Ho Naa Ho",
            "content": "Kal Ho Naa Ho"
        },
        {
            "id": 4,
            "title": "Tujh Mein Rab Dikhta Hai",
            "content": "Rab Ne Bana Di Jodi"
        },
        {
            "id": 5,
            "title": "Tera Ban Jaunga",
            "content": "Kabir Singh"
        }
    ];
    res.send(Songs);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});