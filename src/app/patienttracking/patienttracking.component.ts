import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-patienttracking',
  standalone: true,
  imports: [],
  templateUrl: './patienttracking.component.html',
  styleUrl: './patienttracking.component.css'
})
export class PatienttrackingComponent implements OnInit{

  userDetails: any;
  firstName: string = "";

  constructor(private _apiService: SignupService) {}

  ngOnInit(): void {
    this._apiService.getUserDetails().subscribe({
      next: (details) => {
        this.userDetails = details;
        // React to the update in userDetails
        console.log('User details:', this.userDetails);
        this.firstName = this.userDetails.name.split(" ")[0];
        
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
      }
    });
  }
}
