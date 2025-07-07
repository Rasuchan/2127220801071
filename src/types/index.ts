export interface CreateShortUrlRequest {
    longUrl: string;
}
export interface CreateShortUrlResponse {
    shortUrl: string;
    expiryTime: Date;
}
export interface GetShortUrlStatsRequest {
    shortcode: string;
}
export interface GetShortUrlStatsResponse {
    longUrl: string;
    shortcode: string;
    createdAt: Date;
    expiryTime: Date;
    accessCount: number;
}