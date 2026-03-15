export interface GeocodingResponse {
    results:           GeocodingResponseResult[];
    generationtime_ms: number;
}

export interface GeocodingResponseResult {
    id:           number;
    name:         string;
    latitude:     number;
    longitude:    number;
    elevation:    number;
    feature_code: string;
    country_code: string;
    admin1_id?:   number;
    admin2_id?:   number;
    timezone:     string;
    population?:  number;
    postcodes?:   string[];
    country_id?:   number;
    country?:      string;
    admin1?:      string;
    admin2?:      string;
    admin3_id?:   number;
    admin4_id?:   number;
    admin3?:      string;
    admin4?:      string;
}
