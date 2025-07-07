export class UrlModel {
    longUrl: string;
    shortCode: string;
    expiryTime: Date;

    constructor(longUrl: string, shortCode: string, expiryTime: Date) {
        this.longUrl = longUrl;
        this.shortCode = shortCode;
        this.expiryTime = expiryTime;
    }
}