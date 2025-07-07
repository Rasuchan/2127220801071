export class StatsService {
    private urlDatabase: Map<string, { longUrl: string; shortcode: string; hits: number }>;
    constructor() {
        this.urlDatabase = new Map();
    }
    public getStats(shortcode: string): { longUrl: string; hits: number } | null {
        const urlData = this.urlDatabase.get(shortcode);
        if (urlData) {
            return { longUrl: urlData.longUrl, hits: urlData.hits };
        }
        return null;
    }
    public incrementHits(shortcode: string): void {
        const urlData = this.urlDatabase.get(shortcode);
        if (urlData) {
            urlData.hits += 1;
        }
    }
    public saveUrlData(shortcode: string, longUrl: string): void {
        this.urlDatabase.set(shortcode, { longUrl, shortcode, hits: 0 });
    }
}