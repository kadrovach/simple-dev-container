import { Router } from 'express';
import { imagesearchfunctionalityController } from '../controllers/image-search-functionality.controller';

const router = Router();

// Implement Unsplash API Integration
// Given: A user enters a search term and submits the search
// When: The application processes the search request
// Then: The system queries Unsplash API and retrieves the first matching image
router.post('/implement_unsplash_api_integration', imagesearchfunctionalityController.implement_unsplash_api_integration);
router.get('/implement_unsplash_api_integration', imagesearchfunctionalityController.getImplement_unsplash_api_integration);

// Display Search Results
// Given: The system has retrieved an image from Unsplash
// When: The API call completes successfully
// Then: The user sees the first matching image displayed on the page
router.post('/display_search_results', imagesearchfunctionalityController.display_search_results);
router.get('/display_search_results', imagesearchfunctionalityController.getDisplay_search_results);

// Implement Search Again Functionality
// Given: A user has viewed a search result image
// When: The system asks if they want to search for something else
// Then: The user can choose to perform another search and return to the search page
router.post('/implement_search_again_functionality', imagesearchfunctionalityController.implement_search_again_functionality);
router.get('/implement_search_again_functionality', imagesearchfunctionalityController.getImplement_search_again_functionality);

export { router as imagesearchfunctionalityRouter };
