const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/gutendex', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Definir o esquema do livro
const bookSchema = new mongoose.Schema({
  title: String,
  authors: [String],
  download_count: Number,
  gutenberg_id: Number
});

const Book = mongoose.model('Book', bookSchema);

app.get('/fetch-books', async (req, res) => {
  try {
    const response = await axios.get('https://gutendex.com/books');
    const books = response.data.results;

    books.forEach(async (bookData) => {
      const book = new Book({
        title: bookData.title,
        authors: bookData.authors.map(author => author.name),
        download_count: bookData.download_count,
        gutenberg_id: bookData.id
      });

      await book.save();
    });

    res.send('Books fetched and saved successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching books');
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching books from database');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
