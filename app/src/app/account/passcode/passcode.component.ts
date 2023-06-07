import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/_services/account.service';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.css'],
})
export class PasscodeComponent implements OnInit {
  serverSideErrorMessages: Array<string> = [];
  hide = true;
  email = '';

  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email') as string;
  }

  form = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  getErrorMessage() {
    return this.form.errors;
  }

  logUserIn() {
    const password = this.form.controls.password.value as string;
    this.accountService.getAuthToken(this.email, password).subscribe({
      error: (e) => {
        this.serverSideErrorMessages = Object.values(e.error);
        this.form.setErrors(this.serverSideErrorMessages);
      },
      complete: () =>
        this.router.navigate(['/profile']).then(() => {
          location.reload();
        }),
    });
  }
}
