import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }
  canActivate(): boolean{

    if(!this.authService.isAuth()){
      console.log('Token Expirado')
      this.router.navigate(['login'])
      return false
    }
    return true;
  }
  
}
