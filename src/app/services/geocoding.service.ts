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

  getCountriesByName(name: string): Observable<GeocodingResponse>{
    return this.httpClient.get<GeocodingResponse>(this.url + name)
    // return of<GeocodingResponse>(
    //   {
    // "results": [
    //     {
    //         "id": 3625428,
    //         "name": "Venezuela",
    //         "latitude": 8.0,
    //         "longitude": -66.0,
    //         "elevation": 68.0,
    //         "feature_code": "PCLI",
    //         "country_code": "VE",
    //         "timezone": "America/Caracas",
    //         "population": 28870195,
    //         "country_id": 3625428,
    //         "country": "Venezuela"
    //     },
    //     {
    //         "id": 3534432,
    //         "name": "Venezuela",
    //         "latitude": 21.73748,
    //         "longitude": -78.79336,
    //         "elevation": 22.0,
    //         "feature_code": "PPLA2",
    //         "country_code": "CU",
    //         "admin1_id": 3564175,
    //         "admin2_id": 3564176,
    //         "timezone": "America/Havana",
    //         "population": 16601,
    //         "country_id": 3562981,
    //         "country": "Cuba",
    //         "admin1": "Ciego de Ávila Province",
    //         "admin2": "Municipio de Ciego de Ávila"
    //     },
    //     {
    //         "id": 8919224,
    //         "name": "Venezuela",
    //         "latitude": 16.81889,
    //         "longitude": -91.72389,
    //         "elevation": 668.0,
    //         "feature_code": "PPL",
    //         "country_code": "MX",
    //         "admin1_id": 3531011,
    //         "admin2_id": 8581745,
    //         "timezone": "America/Mexico_City",
    //         "population": 10,
    //         "country_id": 3996063,
    //         "country": "Mexico",
    //         "admin1": "Chiapas",
    //         "admin2": "Ocosingo Municipality"
    //     },
    //     {
    //         "id": 3385237,
    //         "name": "Venezuela",
    //         "latitude": -7.11667,
    //         "longitude": -41.86667,
    //         "elevation": 165.0,
    //         "feature_code": "PPL",
    //         "country_code": "BR",
    //         "admin1_id": 3392213,
    //         "admin2_id": 6319989,
    //         "timezone": "America/Fortaleza",
    //         "country_id": 3469034,
    //         "country": "Brazil",
    //         "admin1": "Piauí",
    //         "admin2": "Santa Cruz do Piauí"
    //     },
    //     {
    //         "id": 3445324,
    //         "name": "Venezuela",
    //         "latitude": -20.83333,
    //         "longitude": -40.9,
    //         "elevation": 150.0,
    //         "feature_code": "PPL",
    //         "country_code": "BR",
    //         "admin1_id": 3463930,
    //         "admin2_id": 6321986,
    //         "timezone": "America/Sao_Paulo",
    //         "country_id": 3469034,
    //         "country": "Brazil",
    //         "admin1": "Espírito Santo",
    //         "admin2": "Rio Novo do Sul"
    //     },
    //     {
    //         "id": 3666178,
    //         "name": "Venezuela",
    //         "latitude": 8.91667,
    //         "longitude": -76.01667,
    //         "elevation": 142.0,
    //         "feature_code": "PPL",
    //         "country_code": "CO",
    //         "admin1_id": 3685889,
    //         "admin2_id": 3674454,
    //         "timezone": "America/Bogota",
    //         "country_id": 3686110,
    //         "country": "Colombia",
    //         "admin1": "Departamento de Córdoba",
    //         "admin2": "Montería"
    //     },
    //     {
    //         "id": 4568540,
    //         "name": "Venezuela",
    //         "latitude": 18.39439,
    //         "longitude": -66.05322,
    //         "elevation": 33.0,
    //         "feature_code": "PPL",
    //         "country_code": "PR",
    //         "admin1_id": 4568138,
    //         "admin2_id": 7268790,
    //         "timezone": "America/Puerto_Rico",
    //         "admin1": "San Juan",
    //         "admin2": "Pueblo Barrio"
    //     },
    //     {
    //         "id": 11563645,
    //         "name": "Venezuela",
    //         "latitude": 14.80956,
    //         "longitude": -92.30338,
    //         "elevation": 64.0,
    //         "feature_code": "PPL",
    //         "country_code": "MX",
    //         "admin1_id": 3531011,
    //         "timezone": "America/Mexico_City",
    //         "country_id": 3996063,
    //         "country": "Mexico",
    //         "admin1": "Chiapas"
    //     },
    //     {
    //         "id": 12960891,
    //         "name": "Venezuela",
    //         "latitude": -6.79036,
    //         "longitude": -70.25355,
    //         "elevation": 142.0,
    //         "feature_code": "PPL",
    //         "country_code": "BR",
    //         "admin1_id": 3665361,
    //         "admin2_id": 6319313,
    //         "timezone": "America/Eirunepe",
    //         "country_id": 3469034,
    //         "country": "Brazil",
    //         "admin1": "Amazonas",
    //         "admin2": "Eirunepé"
    //     },
    //     {
    //         "id": 8599003,
    //         "name": "Venezuela",
    //         "latitude": 3.101,
    //         "longitude": -73.247,
    //         "elevation": 217.0,
    //         "feature_code": "PPLL",
    //         "country_code": "CO",
    //         "admin1_id": 3674810,
    //         "admin2_id": 3671425,
    //         "timezone": "America/Bogota",
    //         "country_id": 3686110,
    //         "country": "Colombia",
    //         "admin1": "Meta Department",
    //         "admin2": "Puerto Lleras"
    //     }
    // ],
    // "generationtime_ms": 0.7736683
    //   }
    // )
  }
}
