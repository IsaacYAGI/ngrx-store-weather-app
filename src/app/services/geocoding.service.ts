import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeocodingResponse } from '../interfaces/geocoding.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  url = "https://geocoding-api.open-meteo.com/v1/search?count=10&language=en&format=json&name="

  constructor(
    private httpClient: HttpClient
  ) { }

  getCountriesByName(name: string): Observable<GeocodingResponse> {
    return this.httpClient.get<GeocodingResponse>(this.url + name)
  }

  getFlagURL(countryCode: string): string {
    return `https://flagcdn.com/32x24/${countryCode.toLowerCase()}.png`
  }

  getGoogleMapsURL(latitude: number, longitude: number): string {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  }
}
