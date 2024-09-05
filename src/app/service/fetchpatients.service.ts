import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchpatientsService {

  staffPhoneNumberData: any;
  baseUrl = "http://localhost:5000/api/patients/search?";

  constructor(private _http: HttpClient) { }

  getPatientsByPhoneNumber(phone: string) {
    const url = this.baseUrl + 'phone=' + phone;
    return this._http.get(url);

  }

  setPatientRecords(payload: any) {
    const url = "http://localhost:5000/api/patients";
    console.log(" calling.... ", url);
    return this._http.post(url, payload);
  }
}
