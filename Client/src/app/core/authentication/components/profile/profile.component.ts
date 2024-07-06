import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileData: any;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchProfileData();
  }

  logout() {
    //this.authService.logout(); 
    this.router.navigate(['/login']); 
  }

  fetchProfileData() {
    this.profileService.getProfileData().subscribe(
      (data) => {
        this.profileData = data;
        console.log('Profile Data:', this.profileData);
      },
      (error) => {
        console.error('Error fetching profile data:', error);
      }
    );
  }
}