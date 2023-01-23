import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  public loginForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>('')
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  get currentUser(): User {
    const user = this.loginForm.value as User;
    return user;
  }

  login(){
    const user = this.currentUser
    this.authService.login(user).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.router.navigate(['home'])
    });
  }

}
