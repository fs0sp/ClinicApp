import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileRegistrationComponent } from './profile-registration/profile-registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupService } from './service/signup.service';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProfileRegistrationComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'hospital_app';

  constructor(private _apiService: SignupService) {
  }

  ngOnInit(): void {
    this.checkIfUserExists();
    console.log("Current Environment ----------- ", environment.currentEnv);
  }

  checkIfUserExists() {
    const details = JSON.parse(localStorage.getItem('details') || '""');
    this._apiService.setUserDetails(details);
    console.log('>>>>>>>>><<<<<<', details);
  }

}
