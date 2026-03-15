import { GeocodingResponseResult } from "../../interfaces/geocoding.interface";

export interface CountriesState {
  loading: boolean;
  countries: GeocodingResponseResult[];
  selectedCountry: GeocodingResponseResult | null;
  query: string;
}
