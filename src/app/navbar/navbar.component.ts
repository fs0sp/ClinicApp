import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  userDetails: any;
  isLoggedIn: boolean = false;
  constructor(private router: Router, private _apiService: SignupService) {

  }
  ngOnInit(): void {
    this._apiService.getUserDetails().subscribe({
      next: (details) => {
        this.userDetails = details;
        // React to the update in userDetails
        console.log('User details updated:', this.userDetails);
        if(details.length !== 0) {
          this.isLoggedIn = true;
        } else if(details.length === 0) {
          this.isLoggedIn = false;
          console.log(this.isLoggedIn)
        }
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
      }
    });
  }

  routeToPage(path: string): void {
    this.router.navigate([path]);
  }

  logoutUser() {
    localStorage.clear();
    this._apiService.setUserDetails(null);
    this.router.navigate(['signin']);
  }
}

