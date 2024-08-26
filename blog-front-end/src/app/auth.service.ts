import { HttpClient } from '@angular/common/http';
import { APP_ID, inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
http=inject(HttpClient)

  constructor() { }

  login(email:string,password:string){
  return this.http.post<{
    accessToken:string;
  }>(environment.apiUrl+"/api/auth",{email,password});


  }
  get isLoggedIn(){
    if(localStorage.getItem("token"))return true;
    else return false;
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from '../environments/environment.development';
// import { tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private http: HttpClient) { }

//   login(email: string, password: string) {
//     return this.http.post<{ accessToken: string }>(
//       `${environment.apiUrl}/api/auth`, 
//       { email, password }
//     ).pipe(
//       tap((response: { accessToken: string; }) => {
//         localStorage.setItem('token', response.accessToken);
//       })
//     );
//   }

//   get isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }
// }
