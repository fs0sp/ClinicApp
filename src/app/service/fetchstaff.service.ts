import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchstaffService implements OnInit {

  baseUrl = "	http://localhost:5000/api/staff";
  allDoctorData: any;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllDoctors();
  }

  fetchAllDoctors() {
    const url = this.baseUrl + `/?role=doctor`;
    return this._http.get(url);
  }

  getAllDoctors(): Observable<any> {
    return this.allDoctorData;
  }

  registerUser(payload: any) {
    const url = "http://localhost:5000/api/staff";
    this._http.post(url, payload).subscribe({
      next: (data) => {
        console.log('Data received: ', data);
      },
      error: (error) => {
        console.log('Log the error here: ', error);
      }
    });
  }
  
}


