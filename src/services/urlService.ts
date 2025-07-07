export class UrlService {
    private urlDatabase: Map<string, { longUrl: string; expiry: Date }> = new Map();
    generateShortCode(longUrl: string): string {
        const shortcode = Math.random().toString(36).substring(2, 8);
        return shortcode;
    }
    saveUrl(longUrl: string, shortcode: string, expiryTime: number): void {
     
        const expiry = new Date(Date.now() + expiryTime * 60 * 1000);
        this.urlDatabase.set(shortcode, { longUrl, expiry });
    }
    getLongUrl(shortcode: string): string | null {
        const urlData = this.urlDatabase.get(shortcode);
        if (urlData && urlData.expiry > new Date()) {
            return urlData.longUrl;
        }
        return null;
    }
}
