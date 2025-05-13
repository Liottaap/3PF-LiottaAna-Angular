import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router){}
  login(){
    console.log('login')
    localStorage.setItem('token','123456789');
    this.router.navigate(['dashboard']);
  }
}


