import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  serverSideErrorMessages: Array<string> = [];

  constructor(private accountService: AccountService, private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  getErrorMessage() {
    if (this.form.controls.email.hasError('email')) return 'Not a valid email';
    return this.form.errors;
  }

  ngOnInit(): void {
    // this.accountService.session().subscribe();
  }

  create(): void {
    const name = this.form.controls.name.value as string;
    const email = this.form.controls.email.value as string;
    const password = this.form.controls.password.value as string;

    this.accountService
      .register({
        name,
        email,
        password,
      })
      .subscribe({
        error: (e) => {
          this.serverSideErrorMessages = Object.values(e.error);
          this.form.setErrors(this.serverSideErrorMessages);
        },
        complete: () => {
          this.accountService.getAuthToken(email, password).subscribe({
            complete: () => {
              this.router.navigate(['/profile']);
            },
          });
        },
      });
  }
}