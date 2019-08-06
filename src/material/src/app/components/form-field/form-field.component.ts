import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Campo obrigatório' :
      this.email.hasError('email') ? 'E-mail inválido' :
        '';
  }
}
