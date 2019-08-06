import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-input-radio-slide',
  templateUrl: './check-input-radio-slide.component.html',
  styleUrls: ['./check-input-radio-slide.component.css']
})
export class CheckInputRadioSlideComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      checkbox: true,
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      radio: '2',
    });
  }

}
