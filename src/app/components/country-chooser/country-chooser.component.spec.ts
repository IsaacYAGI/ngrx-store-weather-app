import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryChooserComponent } from './country-chooser.component';

describe('CountryChooserComponent', () => {
  let component: CountryChooserComponent;
  let fixture: ComponentFixture<CountryChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryChooserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
