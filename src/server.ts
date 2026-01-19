import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { userinterfaceandnavigationRouter } from './routes/user-interface-and-navigation';
import { imagesearchfunctionalityRouter } from './routes/image-search-functionality';
import { deploymentandinfrastructureRouter } from './routes/deployment-and-infrastructure';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (_req, res) => {
  res.json({
    message: 'API is running',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api/*'
    },
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/user-interface-and-navigation', userinterfaceandnavigationRouter);
  app.use('/api/image-search-functionality', imagesearchfunctionalityRouter);
  app.use('/api/deployment-and-infrastructure', deploymentandinfrastructureRouter);

// Error handling
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
