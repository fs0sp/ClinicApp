import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from '../service/signup.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PopupComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  isValidUser: boolean = true;
  userDetails!: string;
  showPopup: boolean = false;

  constructor(private titleService: Title, private fb: FormBuilder, private _apiService: SignupService, private router: Router) {

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      phone: [],
    })
    this.titleService.setTitle('Signup')
  }

  signupUser() {
    const phoneNumber = this.signupForm.get('phone')?.value;
    this._apiService.validateUser(phoneNumber).subscribe({
      next: (response) => {
        console.log(response);
        this._apiService.setUserDetails(response[0]);
        this.userDetails = response;
        this.isValidUser = true;
        // this.routeToPage();
        this.saveLoginToLocalStorage();
        this.showPopup = true;
      },
      error: (err) => {
        console.log(err);
        this.isValidUser = false;
        this.showPopup = true;
      }
    })
  }

  routeToPage(): void {
    this.router.navigate(['add-profile']);
  }

  saveLoginToLocalStorage() {
    localStorage.setItem('details', JSON.stringify( this.userDetails[0]));
    localStorage.setItem('details', JSON.stringify( this.userDetails[0]));
    localStorage.setItem('auth', 'success');
  }

}
