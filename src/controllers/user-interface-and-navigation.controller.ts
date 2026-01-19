import { Request, Response } from 'express';
import { userinterfaceandnavigationService } from '../services/user-interface-and-navigation.service';

export const userinterfaceandnavigationController = {
  /**
   * Create Home Page
   * Given: A user visits the application URL
   * When: The home page loads
   * Then: The user sees an attractive landing page promoting image search functionality
   *
   * Acceptance Criteria:
   * 1. Home page displays compelling messaging about image search capabilities
   * 2. Page has clear visual hierarchy and professional appearance
   * 3. Navigation to login functionality is clearly visible
   * 4. Page loads within 3 seconds
   */
  async create_home_page(req: Request, res: Response): Promise<void> {
    try {
      const result = await userinterfaceandnavigationService.create_home_page(req.body);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async getCreate_home_page(req: Request, res: Response): Promise<void> {
    try {
      const result = await userinterfaceandnavigationService.getCreate_home_page(req.query);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  /**
   * Create Login Page
   * Given: A user wants to access the search functionality
   * When: The user navigates to the login page
   * Then: The user sees a login form that accepts any email and password combination
   *
   * Acceptance Criteria:
   * 1. Login form contains email and password input fields
   * 2. Form accepts any valid email format and any password
   * 3. Successful login redirects user to search page
   * 4. Form validation provides clear error messages for invalid inputs
   */
  async create_login_page(req: Request, res: Response): Promise<void> {
    try {
      const result = await userinterfaceandnavigationService.create_login_page(req.body);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async getCreate_login_page(req: Request, res: Response): Promise<void> {
    try {
      const result = await userinterfaceandnavigationService.getCreate_login_page(req.query);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  /**
   * Create Search Interface
   * Given: A user has successfully logged in
   * When: The user is redirected after login
   * Then: The user sees a search page with an input field for image queries
   *
   * Acceptance Criteria:
   * 1. Search page contains a prominent search input field
   * 2. Search button or enter key triggers the search functionality
   * 3. Interface is intuitive and user-friendly
   * 4. Loading state is shown during search processing
   */
  async create_search_interface(req: Request, res: Response): Promise<void> {
    try {
      const result = await userinterfaceandnavigationService.create_search_interface(req.body);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async getCreate_search_interface(req: Request, res: Response): Promise<void> {
    try {
      const result = await userinterfaceandnavigationService.getCreate_search_interface(req.query);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
};
