import request from 'supertest';
import app from '../src/server';

describe('Image Search Functionality', () => {
  describe('Health Check', () => {
    test('should return healthy status', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('healthy');
    });
  });

  describe('Implement Unsplash API Integration', () => {
    /**
     * Given: A user enters a search term and submits the search
     * When: The application processes the search request
     * Then: The system queries Unsplash API and retrieves the first matching image
     */
    test('should execute implement_unsplash_api_integration successfully', async () => {
      const response = await request(app)
        .post('/api/image-search-functionality/implement_unsplash_api_integration')
        .send({ test: 'data' });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
    });

    test('should retrieve implement_unsplash_api_integration data', async () => {
      const response = await request(app)
        .get('/api/image-search-functionality/implement_unsplash_api_integration');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });


    test('AC1: Application uses api.unsplash.com for image search...', async () => {
      // Verify: Application uses api.unsplash.com for image searches
      const response = await request(app)
        .get('/api/image-search-functionality/implement_unsplash_api_integration');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC2: API key 3U4GsQQaA1eoXotuu29XMjMKF-DmRsypzTudP6z4r1...', async () => {
      // Verify: API key 3U4GsQQaA1eoXotuu29XMjMKF-DmRsypzTudP6z4r14 is correctly configured
      const response = await request(app)
        .get('/api/image-search-functionality/implement_unsplash_api_integration');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC3: Only the first image result is retrieved and proce...', async () => {
      // Verify: Only the first image result is retrieved and processed
      const response = await request(app)
        .get('/api/image-search-functionality/implement_unsplash_api_integration');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC4: API errors are handled gracefully with user-friend...', async () => {
      // Verify: API errors are handled gracefully with user-friendly messages
      const response = await request(app)
        .get('/api/image-search-functionality/implement_unsplash_api_integration');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

  });

  describe('Display Search Results', () => {
    /**
     * Given: The system has retrieved an image from Unsplash
     * When: The API call completes successfully
     * Then: The user sees the first matching image displayed on the page
     */
    test('should execute display_search_results successfully', async () => {
      const response = await request(app)
        .post('/api/image-search-functionality/display_search_results')
        .send({ test: 'data' });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
    });

    test('should retrieve display_search_results data', async () => {
      const response = await request(app)
        .get('/api/image-search-functionality/display_search_results');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });


    test('AC1: Image displays clearly with appropriate sizing...', async () => {
      // Verify: Image displays clearly with appropriate sizing
      const response = await request(app)
        .get('/api/image-search-functionality/display_search_results');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC2: Image attribution information is shown if required...', async () => {
      // Verify: Image attribution information is shown if required by Unsplash
      const response = await request(app)
        .get('/api/image-search-functionality/display_search_results');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC3: Search term context is maintained and visible...', async () => {
      // Verify: Search term context is maintained and visible
      const response = await request(app)
        .get('/api/image-search-functionality/display_search_results');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC4: Image loads completely before being shown to user...', async () => {
      // Verify: Image loads completely before being shown to user
      const response = await request(app)
        .get('/api/image-search-functionality/display_search_results');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

  });

  describe('Implement Search Again Functionality', () => {
    /**
     * Given: A user has viewed a search result image
     * When: The system asks if they want to search for something else
     * Then: The user can choose to perform another search and return to the search page
     */
    test('should execute implement_search_again_functionality successfully', async () => {
      const response = await request(app)
        .post('/api/image-search-functionality/implement_search_again_functionality')
        .send({ test: 'data' });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
    });

    test('should retrieve implement_search_again_functionality data', async () => {
      const response = await request(app)
        .get('/api/image-search-functionality/implement_search_again_functionality');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });


    test('AC1: Clear prompt asking user if they want to search ag...', async () => {
      // Verify: Clear prompt asking user if they want to search again
      const response = await request(app)
        .get('/api/image-search-functionality/implement_search_again_functionality');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC2: Yes option returns user to search page with cleare...', async () => {
      // Verify: Yes option returns user to search page with cleared input
      const response = await request(app)
        .get('/api/image-search-functionality/implement_search_again_functionality');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC3: No option provides appropriate end state or naviga...', async () => {
      // Verify: No option provides appropriate end state or navigation
      const response = await request(app)
        .get('/api/image-search-functionality/implement_search_again_functionality');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

    test('AC4: User can perform multiple searches in the same ses...', async () => {
      // Verify: User can perform multiple searches in the same session
      const response = await request(app)
        .get('/api/image-search-functionality/implement_search_again_functionality');

      expect(response.status).toBe(200);
      // TODO: Add specific assertions for this acceptance criterion
    });

  });
});
