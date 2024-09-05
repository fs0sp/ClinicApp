import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseurl: string = "http://localhost:5000/api/staff";
  isValidUser: boolean = true;
  private userDetailsSubject = new BehaviorSubject<any>(null);
  constructor(private _http: HttpClient) { }

  // validateUser(phoneNumber: string) {
  //   const url = this.baseurl + "?phone=" + phoneNumber;
  //   return this._http.get(url).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.isValidUser = true;
  //     },
  //     error: (error) => {
  //       console.log("Simething went wrong... ", error);
  //       this.isValidUser = false;
  //     }
  //   })
  // }

  validateUser(phoneNumber: string): Observable<any> {
    const url = this.baseurl + "?phone=" + phoneNumber;
    return this._http.get(url);
  }

  // Update userDetails and notify all subscribers
  setUserDetails(param: any) {
    this.userDetailsSubject.next(param);
  }

  // Allow subscribers to get the latest userDetails
  getUserDetails(): Observable<any> {
    return this.userDetailsSubject.asObservable();
  }
}
