import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  apiUrl = environment.apiUrl;
  tokenName = environment.tokenName;

  constructor(
    private http: HttpClient, 
    public jwtHelper: JwtHelperService, 
    public router: Router
  ) { 
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated():boolean{
    const token = localStorage.getItem(this.tokenName);
    return !this.jwtHelper.isTokenExpired(token);
  }

  public login(username: string, password: string){

    if(this.isAuthenticated()){
      this.router.navigate(['cms']); 
    }else{
      this._login(username, password);
    }
  }

  public logout(){
    localStorage.removeItem(environment.tokenName);  
  }

 private _login(username: string, password: string) {

  var data = JSON.stringify({username: username, password: password});
  var headers = new HttpHeaders({'Content-Type': 'application/json'});

  this.http.post(this.apiUrl + 'auth/login', 
    data,
    {headers: headers}
  )
  .subscribe((resp: any) => {         
      localStorage.setItem(environment.tokenName, resp.token);            
      this.router.navigate(['cms']);
    })
    ;     
  }

/* 
  TODO 
  - private _login
  - catch error
  - logout
  - register
  - validation import { FormBuilder, FormGroup, Validators } from 
  - GUARDS
  - Validation
*/
}
