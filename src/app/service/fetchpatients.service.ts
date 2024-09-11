import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchpatientsService {

  staffPhoneNumberData: any;
  baseUrl = environment.patientBaseUrl;

  constructor(private _http: HttpClient) { }

  getPatientsByPhoneNumber(phone: string) {
    const url = this.baseUrl + '/search?phone=' + phone;
    return this._http.get(url);

  }

  setPatientRecords(payload: any) {
    // const url = "http://localhost:5000/api/patients";
    console.log(" calling.... ", this.baseUrl);
    return this._http.post(this.baseUrl, payload);
  }
}
