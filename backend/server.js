```javascript
const express = require('express');
const cors = require('cors');
const presentationRoutes = require('./routes/presentationRoutes');
const dbConfig = require('./config/db');

const app = express();

// Connect to the database
dbConfig.connect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/presentation', presentationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```