import { Router } from 'express';
import { deploymentandinfrastructureController } from '../controllers/deployment-and-infrastructure.controller';

const router = Router();

// Set Up GitHub Repository
// Given: The application code needs to be version controlled and accessible
// When: The project is ready for deployment
// Then: The code is stored in the specified GitHub repository
router.post('/set_up_github_repository', deploymentandinfrastructureController.set_up_github_repository);
router.get('/set_up_github_repository', deploymentandinfrastructureController.getSet_up_github_repository);

// Create Docker Container
// Given: The application needs to run in a containerized environment
// When: Someone wants to test or deploy the application
// Then: The application runs successfully in a single Node.js Docker container
router.post('/create_docker_container', deploymentandinfrastructureController.create_docker_container);
router.get('/create_docker_container', deploymentandinfrastructureController.getCreate_docker_container);

export { router as deploymentandinfrastructureRouter };
