import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder){
    this.loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.invalid) {
      alert('Por favor, rellene el formulario');
    } else {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe((success) => {
        if (success) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Datos inválidos, pruebe nuevamente.');
        }
      });
    }
  }

  }



