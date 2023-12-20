import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService) {}    

  cityName: string = 'Celje';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  kelvinToC(kelvin: number): number {
    return this.KelvinToC(kelvin);
  }

  private KelvinToC(kelvin: number): number {
    return kelvin - 273;
  }

  kelvinToCRounded(kelvin: number): string {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(1);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }

}