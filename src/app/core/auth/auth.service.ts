import { Injectable, ErrorHandler } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { Router } from '@angular/router';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  apiUrl = environment.apiUrl;
  tokenName = environment.tokenName;
  
  authSubject$ : BehaviorSubject<string> = new BehaviorSubject<string>(this.token);

  constructor(
    private http: HttpClient, 
    public jwtHelper: JwtHelperService, 
    public router: Router
  ) { 
    this.jwtHelper = new JwtHelperService();
  }

  get token(){
    return localStorage.getItem(this.tokenName);
  }

  set token(value: string){
    localStorage.setItem(environment.tokenName, value);  
  }

  public isAuthenticated():boolean{
    
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  public decoding(token){
    return decode(token)
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
    this.router.navigate(['login']);
  }

 private _login(username: string, password: string) {

  var data = JSON.stringify({username: username, password: password});
  var headers = new HttpHeaders({'Content-Type': 'application/json'});

  this.http.post(this.apiUrl + 'auth/login', 
    data,
    {headers: headers}
  ).pipe(    
      catchError( (err):any => {

        return [];
      }),
  )
  .subscribe((resp: any) => {                 
      this.token = resp.token;       
      this.authSubject$.next(resp.token);
      this.router.navigate(['cms']);      
    })
    ;     
  }



/* 
  TODO 

  - catch error
  - logout
  - register
  - validation import { FormBuilder, FormGroup, Validators } from 
  - GUARDS
  - Validation
*/
}
