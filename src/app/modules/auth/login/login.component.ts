import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';

import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomValidators } from '../../../core/auth/custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error: string;
  usernameFormControl: FormControl;
  passwordFormControl: FormControl;
  

  constructor(
    private authService: AuthService
    
  ) {
    this.usernameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4)
      
    ]);

    //https://codinglatte.com/posts/angular/cool-password-validation-angular/
    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      CustomValidators.patternValidator(/\d/, { hasNumber: true }),
      
    ]);

    console.log("argo",this.passwordFormControl);
  }

  ngOnInit() {

  }

  login(): void {
    this.authService.login(this.username, this.password)
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class InputErrorStateMatcherExample {
  usernameFormControl = new FormControl('', [
    Validators.required

  ]);

  matcher = new MyErrorStateMatcher();
}
