import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FetchstaffService } from '../service/fetchstaff.service';
import { Title } from '@angular/platform-browser';
import { AdvertComponent } from '../advert/advert.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AdvertComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{

  regForm!: FormGroup;
  isDoctor: boolean = false;

  constructor(private titleService: Title, private fb: FormBuilder, private _apiService: FetchstaffService) {

  }


  ngOnInit(): void {
    this.titleService.setTitle('Registration');
    this.regForm = this.fb.group({
      name: [],
      phone: [],
      role: [],
      qualification: [],
      skills_after_mba: [],
    })

    this.regForm.valueChanges.subscribe((changes) => {
      if(changes.role === 'doctor') {
        this.isDoctor = true; 
      }
      if(changes.role !== 'doctor') {
        this.isDoctor = false;
      }

    })

  }

  generateArray(str: string) {
    if(str === null || str === "") return;
    return str.split(" ");
  }

  registerStaff() {
    console.log("--- Staff Details --- ", this.regForm.value);
    let skillsAfterMba = this.generateArray(this.regForm.get('skills_after_mba')?.value);
    console.log(skillsAfterMba);
    const payload = {
      "role": this.regForm.get('role')?.value,
      "name": this.regForm.get('name')?.value,
      "phone": this.regForm.get('phone')?.value,
      "qualification": this.regForm.get('qualification')?.value,
      "skills_after_mba": (skillsAfterMba === undefined || "" ) ? "" : skillsAfterMba,
    }
    // console.log(payload);
    this._apiService.registerUser(payload);
  }
}
