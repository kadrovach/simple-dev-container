import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { userinterfaceandnavigationRouter } from './routes/user-interface-and-navigation';
import { imagesearchfunctionalityRouter } from './routes/image-search-functionality';
import { deploymentandinfrastructureRouter } from './routes/deployment-and-infrastructure';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
  hsts: false,
  contentSecurityPolicy: false,
}));
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Root route - home page
app.get('/', (_req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Image Search Application</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .container {
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          padding: 60px 40px;
          text-align: center;
          max-width: 600px;
        }
        h1 {
          color: #333;
          margin-bottom: 20px;
          font-size: 2.5em;
        }
        p {
          color: #666;
          margin-bottom: 30px;
          font-size: 1.1em;
          line-height: 1.6;
        }
        .button-group {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        a {
          display: inline-block;
          padding: 15px 30px;
          margin: 10px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          transition: transform 0.2s, box-shadow 0.2s;
          font-size: 1em;
        }
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        .btn-secondary {
          background: #f0f0f0;
          color: #333;
          border: 2px solid #667eea;
        }
        .btn-secondary:hover {
          background: #667eea;
          color: white;
        }
        .status {
          margin-top: 30px;
          padding: 15px;
          background: #f0f7ff;
          border-left: 4px solid #667eea;
          text-align: left;
          border-radius: 5px;
        }
        .status strong {
          color: #667eea;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🔍 Image Search</h1>
        <p>Discover and search for beautiful images from Unsplash. Find the perfect image for any purpose with our intuitive search interface.</p>
        
        <div class="button-group">
          <a href="/login" class="btn-primary">Login</a>
          <a href="/api/user-interface-and-navigation/create_home_page" class="btn-secondary">View API</a>
        </div>
        
        <div class="status">
          <strong>✓ Status:</strong> Application is running and ready to use
        </div>
      </div>
    </body>
    </html>
  `;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
});

// Login page route
app.get('/login', (_req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login - Image Search</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .login-container {
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 100%;
          max-width: 400px;
        }
        h1 {
          color: #333;
          margin-bottom: 30px;
          text-align: center;
          font-size: 1.8em;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          color: #333;
          font-weight: 500;
          margin-bottom: 8px;
        }
        input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e0e0e0;
          border-radius: 5px;
          font-size: 1em;
          transition: border-color 0.3s;
        }
        input:focus {
          outline: none;
          border-color: #667eea;
        }
        button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1em;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        .back-link {
          text-align: center;
          margin-top: 20px;
        }
        .back-link a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
        }
        .back-link a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="login-container">
        <h1>🔐 Login</h1>
        <form onsubmit="handleLogin(event)">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div class="back-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
      <script>
        function handleLogin(event) {
          event.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          // In a real app, you would send this to your backend
          alert('Login successful! Welcome ' + email);
          window.location.href = '/search';
        }
      </script>
    </body>
    </html>
  `;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
});

// Search page route
app.get('/search', (_req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Search - Image Search</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }
        .search-container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 10px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
          margin-bottom: 30px;
          text-align: center;
        }
        .search-form {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }
        input {
          flex: 1;
          padding: 12px;
          border: 2px solid #e0e0e0;
          border-radius: 5px;
          font-size: 1em;
        }
        input:focus {
          outline: none;
          border-color: #667eea;
        }
        button {
          padding: 12px 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }
        button:hover {
          transform: translateY(-2px);
        }
        .results {
          min-height: 100px;
          padding: 40px;
          border: 2px dashed #e0e0e0;
          border-radius: 5px;
          text-align: center;
        }
        .results.empty {
          color: #999;
        }
        .results.loading {
          color: #667eea;
          font-weight: bold;
        }
        .result-item {
          background: #f9f9f9;
          padding: 20px;
          margin: 15px 0;
          border-radius: 5px;
          border-left: 4px solid #667eea;
        }
        .result-item h3 {
          color: #333;
          margin-bottom: 10px;
        }
        .result-item p {
          color: #666;
          font-size: 0.9em;
        }
        .back-link {
          text-align: center;
          margin-top: 20px;
        }
        .back-link a {
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
        }
        .error {
          color: #d32f2f;
          padding: 15px;
          background: #ffebee;
          border-radius: 5px;
          margin-top: 15px;
        }
        .image-result {
          margin-top: 20px;
        }
        .image-result img {
          width: 100%;
          max-width: 600px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .image-info {
          background: #f9f9f9;
          padding: 15px;
          border-radius: 5px;
          margin-top: 15px;
          font-size: 0.95em;
        }
        .image-info a {
          color: #667eea;
          text-decoration: none;
        }
        .image-info a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="search-container">
        <h1>🔍 Search Images</h1>
        <form class="search-form" onsubmit="handleSearch(event)">
          <input type="text" id="searchTerm" placeholder="Search for images..." required>
          <button type="submit" id="searchBtn">Search</button>
        </form>
        <div class="results empty" id="resultsDiv">
          <p>Enter a search term to find images from Unsplash</p>
        </div>
        <div class="back-link">
          <a href="/">← Back to Home</a>
        </div>
      </div>
      <script>
        async function handleSearch(event) {
          event.preventDefault();
          const searchTerm = document.getElementById('searchTerm').value;
          const resultsDiv = document.getElementById('resultsDiv');
          const searchBtn = document.getElementById('searchBtn');
          
          resultsDiv.className = 'results loading';
          resultsDiv.innerHTML = '<p>Searching for: ' + searchTerm + '...</p>';
          searchBtn.disabled = true;
          
          try {
            const response = await fetch('/api/image-search-functionality/implement_unsplash_api_integration', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ searchTerm: searchTerm })
            });
            
            if (!response.ok) {
              throw new Error('Search failed: ' + response.statusText);
            }
            
            const data = await response.json();
            
            if (data.data.success && data.data.image) {
              const img = data.data.image;
              resultsDiv.className = 'results';
              resultsDiv.innerHTML = \`
                <div class="image-result">
                  <h3>📸 \${img.searchTerm}</h3>
                  <img src="\${img.url}" alt="\${img.description}">
                  <div class="image-info">
                    <p><strong>Description:</strong> \${img.description}</p>
                    <p><strong>Photographer:</strong> <a href="\${img.photographerUrl}" target="_blank">\${img.photographer}</a></p>
                    <p><a href="\${img.unsplashUrl}" target="_blank">View on Unsplash →</a></p>
                    <button onclick="searchAgain()" style="margin-top: 10px;">Search Again</button>
                  </div>
                </div>
              \`;
            } else {
              resultsDiv.className = 'results error';
              resultsDiv.innerHTML = '<p>' + (data.data.message || 'No results found') + '</p>';
            }
            
          } catch (error) {
            resultsDiv.className = 'results error';
            resultsDiv.innerHTML = '<p>Error: ' + error.message + '</p>';
          } finally {
            searchBtn.disabled = false;
          }
        }
        
        function searchAgain() {
          document.getElementById('searchTerm').value = '';
          document.getElementById('searchTerm').focus();
        }
      </script>
    </body>
    </html>
  `;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
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
