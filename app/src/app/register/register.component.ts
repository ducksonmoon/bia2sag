import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  constructor() {}
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  getErrorMessage() {
    if (this.form.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.controls.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  ngOnInit(): void {}
}
