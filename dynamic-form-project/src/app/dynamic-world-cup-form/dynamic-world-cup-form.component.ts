import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-world-cup-form',
  templateUrl: './dynamic-world-cup-form.component.html',
  styleUrls: ['./dynamic-world-cup-form.component.css']
})
export class DynamicWorldCupFormComponent {
  worldCupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.worldCupForm = this.fb.group({
      countries: this.fb.array([]),
    });
  }

  addCountry() {
    const countryFormGroup = this.fb.group({
      name: ['', Validators.required],
      year: ['44', Validators.required],
      captain: ['44'],
      score: [''],
      stadium: [''],
      manOfTheMatch: [''],
      manOfTheSeries: [''],
    });

    this.countries.push(countryFormGroup);
  }

  get countries(): FormArray {
    return this.worldCupForm.get('countries') as FormArray;
  }
  

  submitForm() {
    // Handle form submission here
    const formData = this.worldCupForm.value;
    console.log(formData);
  }
}
