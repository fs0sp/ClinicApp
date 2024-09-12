import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { CommonModule } from '@angular/common';
import { RolePipe } from '../role.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RolePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  userDetails: any;
  isLoggedIn: boolean = false;
  currentTabSelected: string = "/home";
  constructor(private router: Router, private _apiService: SignupService) {

  }
  ngOnInit(): void {
    console.log("User Logged in? ", this.isLoggedIn);
    this._apiService.getUserDetails().subscribe({
      next: (details) => {
        this.userDetails = details;
        // React to the update in userDetails
        console.log('User details updated:', this.userDetails, typeof(details));
        if(details !== null || !details) {
          this.isLoggedIn = true;
        }
        if(details?.length === 0  || details === null || details === "") {
          this.isLoggedIn = false;
          console.log(this.isLoggedIn)
        }
        console.log("User Logged in? ", this.isLoggedIn);
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
      }
    });
  }

  routeToPage(path: string): void {
    this.currentTabSelected = path;
    console.log("Current tab selected:: ", this.currentTabSelected);
    this.router.navigate([path]);
  }

  logoutUser() {
    localStorage.clear();
    this._apiService.setUserDetails(null);
    this.router.navigate(['signin']);
  }
}


