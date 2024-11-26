import express from 'express';
import customerRoutes from './routes/customer.routes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/customers', customerRoutes);

// Start the server
const PORT = 3600;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});