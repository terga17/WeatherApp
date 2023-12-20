import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { WeatherData } from './weather.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIKeyName, environment.XRapidAPIKey)
      .set(environment.XRapidAPIHostName, environment.XRapidAPIHost),
      params: new HttpParams()
      .set('city', cityName)
    });
  }

  
  
}
