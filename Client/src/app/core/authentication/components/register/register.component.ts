import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  password_confirmation = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
    }).subscribe({
      next: (response) => {
        console.log('Registration successful');
      },
      error: (error) => {
        console.error('Registration failed', error);
        alert("Registration Failed");
      }
    });
  }
}