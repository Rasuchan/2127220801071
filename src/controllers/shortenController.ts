import { Request, Response } from 'express';
import { UrlService } from '../services/urlService';

export class ShortenController {
    constructor(private urlService: UrlService) {}

    async createShortUrl(req: Request, res: Response): Promise<Response> {
        const { url, validity, shortcode } = req.body;
        if (!url) {
            return res.status(400).json({ error: 'Long URL is required' });
        }
        try {
            const shortCode = shortcode || await this.urlService.generateShortCode(url);
            const expiry = validity ? Number(validity) : 30;
            await this.urlService.saveUrl(url, shortCode, expiry);
            const shortLink = `${req.protocol}://${req.get('host')}/${shortCode}`;
            return res.status(201).json({ shortLink, expiry });
        } catch (error) {
            return res.status(500).json({ error: 'Error creating short URL' });
        }
    }
}