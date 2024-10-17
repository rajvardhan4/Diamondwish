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

// API endpoint to fetch product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;  // Get the ID from the request URL

  // SQL query to fetch the specific product by ID
  const productQuery = 'SELECT * FROM product WHERE id = ?';

  // Fetch the product by ID
  db.query(productQuery, [productId], (err, productResults) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching product data' });
      return;
    }

    // Check if the product was found
    if (productResults.length === 0) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    // Return the product details
    res.json({
      product: productResults[0]  // Return the specific product
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
