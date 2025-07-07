import { Router } from 'express';
import { ShortenController } from '../controllers/shortenController';
import { UrlService } from '../services/urlService';
const router = Router();

export function setShortenRoutes(app: Router, urlService: UrlService) {
    const shortenController = new ShortenController(urlService);
    app.post('/shorten', shortenController.createShortUrl.bind(shortenController));
}