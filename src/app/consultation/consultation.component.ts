import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomTextareaComponent } from '../widgets/custom-textarea/custom-textarea.component';
import { FetchpatientsService } from '../service/fetchpatients.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [ReactiveFormsModule, CustomTextareaComponent, CommonModule],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent implements OnInit {

  consultForm!: FormGroup;
  dataSymptoms: any;
  dataDiagnosis: any;
  dataBodyParts: any;
  dataDisease: any;
  dataDiet: any;
  dataPreventiveMeasures: any;
  dataPresMeds: any;
  personalDetails: any = [];
  isWrongNumber: boolean = false;
  constructor(private titleService: Title, private fb: FormBuilder, private _apiService: FetchpatientsService) {

  }

  ngOnInit(): void {
    this.consultForm = this.fb.group({
      phone: [],
      problem: []
    })

    this.titleService.setTitle('Consultation');
  }

  fetchDetails() {
    const phonenumber = this.consultForm.get('phone')?.value;
    this._apiService.getPatientsByPhoneNumber(phonenumber).subscribe((data) => {
      this.personalDetails = data;
      console.log("Personal data is > ", this.personalDetails);
      // this.populatePersonalDetails();
    });
  }

  onSubmit() {
    const firstName = this.personalDetails?.firstName;
    const lastName = this.personalDetails?.lastName;
    const email = this.personalDetails?.email;
    const age = this.personalDetails?.age;
    const address = this.personalDetails?.address;
    const ConsultationFeeAmount = this.personalDetails?.ConsultationFeeAmount;
    const feePaid = this.personalDetails?.feePaid;
    const status = this.personalDetails?.status;
    const doctorID = this.personalDetails?.doctorID;
    const doctorName = this.personalDetails?.doctorName;
    const receptionistID = this.personalDetails?.receptionistID;
    const receptionistName = this.personalDetails?.receptionistName;
    const testsUndertaken = this.personalDetails?.testsUndertaken;

    const payload = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "age" : age,
      "address" : address,
      "ConsultationFeeAmount" : ConsultationFeeAmount,
      "feePaid" : feePaid,
      "status" : status,
      "doctorID": doctorID,
      "doctorName": doctorName,
      "receptionistID": receptionistID,
      "receptionistName": receptionistName,
      "testsUndertaken": testsUndertaken,
      "phone": this.consultForm.get('phone')?.value === null ? "" : this.consultForm.get('phone')?.value,
      "symptoms": this.dataSymptoms,
      "diagnosis": this.dataDiagnosis,
      "affectedBodyParts": this.dataBodyParts,
      "disease": this.dataDisease,
      "prescribedMedicines": this.dataPresMeds,
      "dietPlan": this.dataDiet?.toString(),
    };

    console.log("button tapped. ", payload);
    // this._apiService.setPatientRecords(payload);

    this._apiService.setPatientRecords(payload).subscribe((xx) => {
      console.log("response data is > ", xx);
    });
  }

  emitDataSymptoms(param: any) {
    console.log("hello from parent!!s", param);
    this.dataSymptoms = param;

  }

  emitDataDiagnosis(param: any) {
    console.log("hello from parent!!s", param);
    this.dataDiagnosis = param;
  }

  emitDataBodyParts(param: any) {
    console.log("hello from parent!!s", param);
    this.dataBodyParts = param;
  }

  emitDataDisease(param: any) {
    console.log("hello from parent!!s", param);
    this.dataDisease = param;
  }

  emitDataDiet(param: any) {
    console.log("hello from parent!!s", param);
    this.dataDiet = param;
  }

  emitDataPreventiveMeasures(param: any) {
    console.log("hello from parent!!s", param);
    this.dataPreventiveMeasures = param;
  }

  emitDataPresMedicine(param: any) {
    console.log("hello from parent!!s", param);
    this.dataPresMeds = param;
  }
}
