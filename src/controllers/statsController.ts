import { Request, Response } from 'express';
import { StatsService } from '../services/statsService';

export class StatsController {
    constructor(private statsService: StatsService) {}
    async getShortUrlStats(req: Request, res: Response): Promise<Response> {
        const { shortcode } = req.params;
        try {
            const stats = await this.statsService.getStats(shortcode);
            if (!stats) {
                return res.status(404).json({ message: 'Short URL not found' });
            }
            return res.status(200).json(stats);
        } catch (error) {
            console.error('Error retrieving short URL stats:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}