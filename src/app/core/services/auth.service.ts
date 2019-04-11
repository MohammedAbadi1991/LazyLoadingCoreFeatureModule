import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    ) { }

  

  setRefreshToken(token: string) {
    localStorage.setItem('refreshtoken', token);
  }

  getRefreshToken() {
    if (localStorage.getItem('refreshtoken')) {
      return localStorage.getItem('refreshtoken');
    }
    return null;

  }

}
