import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  error: string = '';
  success: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  register(event: Event) {
    event.preventDefault();
    if (this.form?.valid) {
      const value = this.form?.value;
      this.authService
        .createUser(value.email, value.password)
        .then(() => {
          this.success = `Tu usuario ${value.email} ha sido creado de manera exitosa, ve a login para ingresar al multiverso`;
        })
        .catch((e) => {
          this.error = `Error: ${e.message}`;
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  goToLogin() {
    this.router.navigateByUrl('/auth/login');
  }
}
