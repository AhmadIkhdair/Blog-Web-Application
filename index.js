import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for static files
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Your routes will go here
app.get('/', (req, res) => {
    res.render('index.ejs'); // Create an 'index.ejs' file in the 'views' folder
  });

app.post('/submit', (req,res) => {
    const title = req.body["title"];
    const author = req.body["author"];
    const content = req.body["content"];
    const type = req.body["dropdown"];

    res.render('index.ejs', {
      blogTitle : title,
      blogAuthor : author,
      blogContent : content,
      blogType : type
    })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
