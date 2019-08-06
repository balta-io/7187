import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  form: FormGroup;
  cities: string[] = [];
  filteredCities: Observable<string[]>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      city: 'São Paulo'
    });

    this.cities.push("São Paulo");
    this.cities.push("Rio de Janeiro");
    this.cities.push("Brasília");
    this.cities.push("Belo Horizonte");
    this.cities.push("Manaus");

    this.filteredCities = this.form.controls['city'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(option => option.toLowerCase().includes(filterValue));
  }

}
