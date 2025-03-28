import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';


dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(
    () => { console.log('MongoDb is connected'); 
})
.catch(err => {
    console.log(err);
});

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests only from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    credentials: true // Allow cookies (if needed)
  }));

app.use(express.json());

/*app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });*/
  const PORT = 5000; // Change 3000 to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});



  app.use('/api/user', userRoutes);
  app.use('/api/auth', authRoutes);

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
      });

  });