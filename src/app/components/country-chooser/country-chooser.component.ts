import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { CountryItemComponent } from '../country-item/country-item.component';

@Component({
  selector: 'app-country-chooser',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CountryItemComponent
  ],
  templateUrl: './country-chooser.component.html',
  styleUrl: './country-chooser.component.css'
})
export class CountryChooserComponent {

  @Input() title: string = "Buscar"
  @Output() onChangeInput: EventEmitter<string> = new EventEmitter();

  form!: FormGroup;
  destroy$: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder
  ){
    this.createForm()
    this.subscribeToForm()
  }

  createForm(){
    this.form = this.formBuilder.group({
      character:[""]
    })
  }

  subscribeToForm(){
    this.form.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    )
    .subscribe(value => {
      console.log("To the parent:",value);
      this.onChangeInput.emit(value.character)
      //dispatch here
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
