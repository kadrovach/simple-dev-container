import { Request, Response } from 'express';
import { imagesearchfunctionalityService } from '../services/image-search-functionality.service';

export const imagesearchfunctionalityController = {
  /**
   * Implement Unsplash API Integration
   * Given: A user enters a search term and submits the search
   * When: The application processes the search request
   * Then: The system queries Unsplash API and retrieves the first matching image
   *
   * Acceptance Criteria:
   * 1. Application uses api.unsplash.com for image searches
   * 2. API key 3U4GsQQaA1eoXotuu29XMjMKF-DmRsypzTudP6z4r14 is correctly configured
   * 3. Only the first image result is retrieved and processed
   * 4. API errors are handled gracefully with user-friendly messages
   */
  async implement_unsplash_api_integration(req: Request, res: Response): Promise<void> {
    try {
      const result = await imagesearchfunctionalityService.implement_unsplash_api_integration(req.body);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async getImplement_unsplash_api_integration(req: Request, res: Response): Promise<void> {
    try {
      const result = await imagesearchfunctionalityService.getImplement_unsplash_api_integration(req.query);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  /**
   * Display Search Results
   * Given: The system has retrieved an image from Unsplash
   * When: The API call completes successfully
   * Then: The user sees the first matching image displayed on the page
   *
   * Acceptance Criteria:
   * 1. Image displays clearly with appropriate sizing
   * 2. Image attribution information is shown if required by Unsplash
   * 3. Search term context is maintained and visible
   * 4. Image loads completely before being shown to user
   */
  async display_search_results(req: Request, res: Response): Promise<void> {
    try {
      const result = await imagesearchfunctionalityService.display_search_results(req.body);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async getDisplay_search_results(req: Request, res: Response): Promise<void> {
    try {
      const result = await imagesearchfunctionalityService.getDisplay_search_results(req.query);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  /**
   * Implement Search Again Functionality
   * Given: A user has viewed a search result image
   * When: The system asks if they want to search for something else
   * Then: The user can choose to perform another search and return to the search page
   *
   * Acceptance Criteria:
   * 1. Clear prompt asking user if they want to search again
   * 2. Yes option returns user to search page with cleared input
   * 3. No option provides appropriate end state or navigation
   * 4. User can perform multiple searches in the same session
   */
  async implement_search_again_functionality(req: Request, res: Response): Promise<void> {
    try {
      const result = await imagesearchfunctionalityService.implement_search_again_functionality(req.body);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async getImplement_search_again_functionality(req: Request, res: Response): Promise<void> {
    try {
      const result = await imagesearchfunctionalityService.getImplement_search_again_functionality(req.query);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
};
