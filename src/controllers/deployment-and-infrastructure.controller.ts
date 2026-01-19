import { Request, Response } from 'express';
import { deploymentandinfrastructureService } from '../services/deployment-and-infrastructure.service';

export const deploymentandinfrastructureController = {
  /**
   * Set Up GitHub Repository
   * Given: The application code needs to be version controlled and accessible
   * When: The project is ready for deployment
   * Then: The code is stored in the specified GitHub repository
   *
   * Acceptance Criteria:
   * 1. Code is committed to GitHub.com/kadrovach/simple-dev-container
   * 2. Repository includes all necessary application files
   * 3. README file explains how to run the application
   * 4. Git history shows logical commit progression
   */
  async set_up_github_repository(req: Request, res: Response): Promise<void> {
    try {
      const result = await deploymentandinfrastructureService.set_up_github_repository(req.body);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async getSet_up_github_repository(req: Request, res: Response): Promise<void> {
    try {
      const result = await deploymentandinfrastructureService.getSet_up_github_repository(req.query as any);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  /**
   * Create Docker Container
   * Given: The application needs to run in a containerized environment
   * When: Someone wants to test or deploy the application
   * Then: The application runs successfully in a single Node.js Docker container
   *
   * Acceptance Criteria:
   * 1. Dockerfile successfully builds Node.js application
   * 2. Container can be started with a single docker command
   * 3. Application is accessible via web browser when container is running
   * 4. All dependencies are properly included in the container image
   */
  async create_docker_container(req: Request, res: Response): Promise<void> {
    try {
      const result = await deploymentandinfrastructureService.create_docker_container(req.body);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  async getCreate_docker_container(req: Request, res: Response): Promise<void> {
    try {
      const result = await deploymentandinfrastructureService.getCreate_docker_container(req.query as any);
      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
};
