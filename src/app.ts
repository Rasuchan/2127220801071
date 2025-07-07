import express from 'express';
import { json } from 'body-parser';
import { setShortenRoutes } from './routes/shortenRoutes';
import { setStatsRoutes } from './routes/statsRoutes';
import logger from './middlewares/logger';
import { UrlService } from './services/urlService';

const app = express();
const PORT = process.env.PORT || 3000;
const urlService = new UrlService();

app.use(json());
app.use(logger);

// Pass the shared urlService instance to the route setup functions
setShortenRoutes(app, urlService);
setStatsRoutes(app);

// Redirect route for short URLs using the shared urlService
app.get('/:shortcode', (req, res) => {
    const { shortcode } = req.params;
    const longUrl = urlService.getLongUrl(shortcode);
    if (longUrl) {
        return res.redirect(longUrl);
    } else {
        return res.status(404).json({ error: 'Short URL not found or expired' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});