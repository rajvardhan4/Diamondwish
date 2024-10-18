import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'; // Import the cors package

const app = express();
const PORT = 4000;

// Use CORS middleware to allow requests from your frontend
app.use(cors({
  origin: 'http://localhost:5173', // Specify the frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456', 
  database: 'productdb'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// API endpoint to fetch product and color options data
app.get('/api/products', (req, res) => {
  const productQuery = 'SELECT * FROM product';
  const colorOptionsQuery = 'SELECT * FROM color_options';

  db.query(productQuery, (err, productResults) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching product data' });
      return;
    }

    db.query(colorOptionsQuery, (err, colorResults) => {
      if (err) {
        res.status(500).json({ message: 'Error fetching color options data' });
      } else {
        // Combine the product and color options results
        res.json({
          products: productResults,
          colorOptions: colorResults
        });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
