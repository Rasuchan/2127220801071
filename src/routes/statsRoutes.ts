import { Router } from 'express';
import { StatsController } from '../controllers/statsController';
import { StatsService } from '../services/statsService';
const router = Router();
const statsService = new StatsService();
const statsController = new StatsController(statsService);
export function setStatsRoutes(app: Router) {
    app.get('/stats/:shortcode', statsController.getShortUrlStats.bind(statsController));
}