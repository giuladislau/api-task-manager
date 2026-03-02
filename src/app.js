import express from 'express';
import tasksRoutes from './routes/tasks.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

// Rotas principais
app.use('/tasks', tasksRoutes);

// Middleware global de erro
app.use(errorMiddleware);

export default app;