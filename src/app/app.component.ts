import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CountryChooserComponent } from './components/country-chooser/country-chooser.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { selectSidebarVisible } from './state/selectors/sidebar.selectors';
import { AsyncPipe } from '@angular/common';
import { hideSidebar, showSidebar } from './state/actions/sidebar.actions';
import { selectSelectedCountry } from './state/selectors/countries.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    CountryChooserComponent,
    WeatherInfoComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sidebarVisible$ = this.store.select(selectSidebarVisible);
  selectedCountry$ = this.store.select(selectSelectedCountry);
  title = 'ngrx-store-weather-app';

  constructor(private store: Store<AppState>){

  }

  showSidebar(){
    this.store.dispatch(showSidebar())
  }

  hideSidebar(){
    this.store.dispatch(hideSidebar())
  }
}
