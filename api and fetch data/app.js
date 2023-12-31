const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB Connection Error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define a MongoDB Schema and Model (e.g., for a 'items' collection)
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

// Create a route to retrieve data

app.get('/api/items', async (req, res) => {
    try {
      const items = await Item.find();
      console.log('Items:', items);
      res.json(items);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  });

app.post('/api/items', async (req, res) => {
    try {
        const { name, description } = req.body;
        const newItem = new Item({
            
                "name": "Item 4",
                "description": "This is a new item"
        });
        await newItem.save();
        res.status(201).json({
        message: 'Hurrah! Item successfully created'
      }); // Respond with the newly created item
    }
    catch (error) {
      res.status(500).json({ error: 'Error creating item' });
    }
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
