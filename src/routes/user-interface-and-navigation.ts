import { Router } from 'express';
import { userinterfaceandnavigationController } from '../controllers/user-interface-and-navigation.controller';

const router = Router();

// Create Home Page
// Given: A user visits the application URL
// When: The home page loads
// Then: The user sees an attractive landing page promoting image search functionality
router.post('/create_home_page', userinterfaceandnavigationController.create_home_page);
router.get('/create_home_page', userinterfaceandnavigationController.getCreate_home_page);

// Create Login Page
// Given: A user wants to access the search functionality
// When: The user navigates to the login page
// Then: The user sees a login form that accepts any email and password combination
router.post('/login', userinterfaceandnavigationController.create_login_page);

// Create Search Interface
// Given: A user has successfully logged in
// When: The user is redirected after login
// Then: The user sees a search page with an input field for image queries
router.post('/search', userinterfaceandnavigationController.create_search_interface);

export { router as userinterfaceandnavigationRouter };
