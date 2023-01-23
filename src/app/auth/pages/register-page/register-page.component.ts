import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Register } from '../../interfaces/register.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public registerForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    fullName: new FormControl<string>('')
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  get currentRegister(): Register {
    const user = this.registerForm.value as Register;
    return user;
  }

  register(){
    const newUser = this.currentRegister
    this.authService.singin(newUser).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.router.navigate(['home'])
    });
  }

}
