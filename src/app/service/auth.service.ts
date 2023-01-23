import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,

    private jwtHelper: JwtHelperService
  ) { }

  singin(user: any) {
    return this.http.post('http://localhost:3000/api/auth/register', user);
  }

  login(user: any) {
    return this.http.post('http://localhost:3000/api/auth/login', user)
  }

  isAuth():boolean {
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false
    }

    return true
  }
}
