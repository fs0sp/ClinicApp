import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TokenService } from '../service/token.service';
import { FetchpatientsService } from '../service/fetchpatients.service';
import { FetchstaffService } from '../service/fetchstaff.service';
import { TypeaheadInputboxComponent } from '../typeahead-inputbox/typeahead-inputbox.component';
import { Title } from '@angular/platform-browser';
import { CustomPopupComponent } from '../custom-popup/custom-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TypeaheadInputboxComponent],
  templateUrl: './profile-registration.component.html',
  styleUrl: './profile-registration.component.css'
})
export class ProfileRegistrationComponent implements OnInit{

  isPatientForm: boolean = false;
  isOldSelected: boolean = false;
  isNewSelected: boolean = false;
  isReference: boolean = false;

  showToken: boolean = true;
  showPhoneForm: boolean = false;

  myForm!: FormGroup;
  myPatientForm !: FormGroup;
  myDoctorForm !: FormGroup;
  myFeePaymentForm !: FormGroup;
  myReferenceForm !: FormGroup;

  firstName: string = "";
  tokenDetails!: Number;

  allDoctors: any;
  personalDetails: any;
  selectedDoctorDetails: any;

  constructor(public dialog: MatDialog, private titleService: Title ,private fb: FormBuilder, private tokenService: TokenService, private _fetchPatientService: FetchpatientsService, private _fetchStaffService: FetchstaffService) {

  }

  ngOnInit(): void {

    this.titleService.setTitle('Add Profile');
    
    this._fetchStaffService.fetchAllDoctors()?.subscribe((data: any) => {
      this.allDoctors = data;
      console.log("All doctors are --- ", this.allDoctors);
    });

    this.tokenDetails = this.tokenService.getToken();
    console.log("CURRENT TOKEN IS >>", this.tokenDetails);

    this.myForm = this.fb.group({
      userStatus: [],
      firstName: [],
      lastName: [],
      enteredPhoneNumber: [],
      email: [],
      phone: [],
      age: [],
      address: [],
      receptionistName: [],
      receptionistId: [],
    });

    this.myDoctorForm = this.fb.group({
      problem: [],
      status: ['Under Treatment'],
      doctorName: [],
      doctorRegId: [],
    });

    this.myFeePaymentForm = this.fb.group({
      consultFee: [],
      feePaid: [],
    })

    this.myReferenceForm = this.fb.group({
      status: [],
      referName: [],
      referEmail: [],
    })

    this.myForm.valueChanges.subscribe((changes) => {
      if(changes.userStatus === 'old') {
        this.showPhoneForm = true;
      } else {
        this.showPhoneForm = false;
      }
    })

    this.myDoctorForm.valueChanges.subscribe((changes) => {
      console.log(changes);
      const docName = changes.doctorName;
      const docReg = this.findDoctorRegId(docName);
      console.log(docName, docReg);
      this.myDoctorForm.patchValue({
        doctorRegId: docReg
      }, {emitEvent: false})
    })

    

    this.myReferenceForm.valueChanges.subscribe((changes) => {
      if(changes.status === 'yes') {
        this.isReference = true; 
      }
      if(changes.status === 'no') {
        this.isReference = false;
      }
    })



  }

  findDoctorRegId(name: String) {
    let res = this.allDoctors.filter((item: any) => item.name === name);
    console.log(res);
    return res[0]?.regNumber;
  }

  generateToken(): void {
    this.showToken = true;
    setTimeout(() => {
      const tokenHeading = document.querySelector('#tokendetails');
      console.log()
      tokenHeading?.classList.add('show');
    }, 500);
  }

  submitPhoneNumber(): void {
    const phonenumber = this.myForm.get('enteredPhoneNumber')?.value;
    this._fetchPatientService.getPatientsByPhoneNumber(phonenumber).subscribe((data) => {
      this.personalDetails = data;
      console.log("Personal data is > ", this.personalDetails);
      this.populatePersonalDetails();
    });
  }

  populatePersonalDetails() {
    console.log("personal >>", this.personalDetails)
    this.myForm.patchValue({
      firstName : this.personalDetails?.firstName,
      lastName: this.personalDetails?.lastName,
      phone: this.personalDetails?.phone,
      email: this.personalDetails?.email,
      age: this.personalDetails?.age,
      address: this.personalDetails?.address,
      receptionistName: this.personalDetails?.receptionistName,
      receptionistId: this.personalDetails?.receptionistID,
    })
  }

  setSelectedDoctor(param:any) {
    console.log("Selected doctor from parent : ", param);
  }


  onSubmit():void {
    console.log("form values are , ", this.myForm.value, this.myDoctorForm.value, this.myFeePaymentForm.value, this.myReferenceForm.value);
    this.generatePayload();
  }

  generatePayload() {
    const payload = {
      "firstName" : this.myForm.get('firstName')?.value,
      "lastName" : this.myForm.get('lastName')?.value,
      "phone" : this.myForm.get('phone')?.value,
      "email" : this.myForm.get('email')?.value,
      "age" : this.myForm.get('age')?.value,
      "address" : this.myForm.get('address')?.value,
      "receptionistName" : this.myForm.get('receptionistName')?.value,
      "receptionistId" : this.myForm.get('receptionistId')?.value,
      "status": this.myDoctorForm.get('status')?.value,
      "doctorName": this.myDoctorForm.get('doctorName')?.value,
      "doctorID": this.myDoctorForm.get('doctorRegId')?.value,
      "problem": this.myDoctorForm.get('problem')?.value,
      "ConsultationFeeAmount": this.myDoctorForm.get('consultFee')?.value,
      "feePaid": this.myDoctorForm.get('feePaid')?.value,
    }

    // this._fetchPatientService.setPatientRecords(payload).subscribe((xx) => {
    //     console.log("response data is > ", xx);

    //   });

      this._fetchPatientService.setPatientRecords(payload).subscribe({
        next: (response) => {
          console.log("response data is > ", response);
          this.openSuccessPopup();
        },
        error: (err) => {
          console.error("Error occurred: ", err);
        }
      });
      
  }

  openSuccessPopup(): void {
    this.dialog.open(CustomPopupComponent, {
      width: '300px',
      data: { message: 'Added Successfully!' }
    });
  }

}
