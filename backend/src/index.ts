import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import enquiryRoutes from './routes/enquiryRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/kidrove';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enquiry', enquiryRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Database connection
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.warn('\n⚠️ WARNING: Could not connect to local MongoDB. The server will run in memory-only mode.');
    console.warn('To enable database persistence, ensure MongoDB is running on port 27017.\n');
  });

// Always start the server regardless of DB connection status
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
