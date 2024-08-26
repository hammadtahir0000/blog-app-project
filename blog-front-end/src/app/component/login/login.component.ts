import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router=inject(Router)
  authService = inject(AuthService);
    email!:string;
    password!:string;

  login(){
    if(this.email && this.password){
      this.authService.login(this.email, this.password).subscribe((result)=>{
        console.log(result);
        localStorage.setItem('token',result.accessToken);
        this.router.navigateByUrl("/admin/blogs")
      })
    }else{
      alert('abya bsdk si email and password dal na');
    }
  }
}
