import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomTextareaComponent } from '../widgets/custom-textarea/custom-textarea.component';
import { FetchpatientsService } from '../service/fetchpatients.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [ReactiveFormsModule, CustomTextareaComponent],
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
    const firstName = this.personalDetails[0]?.firstName;
    const lastName = this.personalDetails[0]?.lastName;
    const email = this.personalDetails[0]?.email;
    const age = this.personalDetails[0]?.age;
    const address = this.personalDetails[0]?.address;
    const ConsultationFeeAmount = this.personalDetails[0]?.ConsultationFeeAmount;
    const feePaid = this.personalDetails[0]?.feePaid;
    const status = this.personalDetails[0]?.status;
    const doctorID = this.personalDetails[0]?.doctorID;
    const doctorName = this.personalDetails[0]?.doctorName;
    const receptionistID = this.personalDetails[0]?.receptionistID;
    const receptionistName = this.personalDetails[0]?.receptionistName;
    const testsUndertaken = this.personalDetails[0]?.testsUndertaken;

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
