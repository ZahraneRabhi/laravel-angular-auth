import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router) {}

  login() {
    this.authService.login({
      email: this.email,
      password: this.password,
    }).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);
        console.log('Login successful');
          this.router.navigate(['/profile']); 
      },
      error: (error) => {
        console.error('Login failed', error);
        alert("Wrong Credentials");
      }
    });
  }
}