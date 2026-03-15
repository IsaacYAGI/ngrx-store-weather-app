import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CountryChooserComponent } from './components/country-chooser/country-chooser.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    CountryChooserComponent,
    WeatherInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sidebarVisible = false;
  title = 'ngrx-store-weather-app';
}
