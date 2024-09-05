import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private currentToken!: Number;

  constructor() { 
    this.fetchToken();
  }

  fetchToken(): void {
    const token = localStorage.getItem('currentToken');
    this.currentToken = token ? Number(token) : 1;
  }

  setToken(token: Number): void {
    localStorage.setItem('currentToken', token.toString());
    this.currentToken = token;
  }

  getToken(): Number {
    return this.currentToken;
  }
}
