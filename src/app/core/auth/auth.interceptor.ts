import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{    
    tokenName = environment.tokenName;

    constructor(private authService: AuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let isAuthenticated = this.authService.isAuthenticated();        

        if(isAuthenticated){
            let token = localStorage.getItem(this.tokenName);                        

            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}