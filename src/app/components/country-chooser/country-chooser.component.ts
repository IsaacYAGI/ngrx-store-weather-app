import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { filterCountries, selectedCountry } from '../../state/actions/countries.actions';
import { selectCountriesList } from '../../state/selectors/countries.selectors';
import { AsyncPipe } from '@angular/common';
import { TableModule, TableRowSelectEvent } from 'primeng/table';
import { GeocodingResponseResult } from '../../interfaces/geocoding.interface';
import { hideSidebar } from '../../state/actions/sidebar.actions';

@Component({
  selector: 'app-country-chooser',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    TableModule
  ],
  templateUrl: './country-chooser.component.html',
  styleUrl: './country-chooser.component.css'
})
export class CountryChooserComponent {

  @Input() title: string = "Buscar"
  @Output() onChangeInput: EventEmitter<string> = new EventEmitter();

  countries$ = this.store.select(selectCountriesList)
  selectedCountry: GeocodingResponseResult | null = null;

  form!: FormGroup;
  destroy$: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ){
    this.createForm()
    this.subscribeToForm()
  }

  createForm(){
    this.form = this.formBuilder.group({
      country:[""]
    })
  }

  subscribeToForm(){
    this.form.valueChanges.pipe(
      debounceTime(1500),
      takeUntil(this.destroy$)
    )
    .subscribe(value => {
      console.log("To the parent:",value);
      this.onChangeInput.emit(value.country)
      this.store.dispatch(filterCountries({name: value.country}))
    })
  }

  onCountrySelected(country: TableRowSelectEvent){
    console.log("Selected country:", country.data);
    this.store.dispatch(selectedCountry({country: country.data}))
    this.store.dispatch(hideSidebar())
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
