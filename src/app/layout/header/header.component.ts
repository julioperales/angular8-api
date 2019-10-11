import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogged = false;
  public user;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    /*this.isLogged = this.authService.isAuthenticated();
    this.user = this.authService.decoding();*/

    this.authService.authSubject$.subscribe((token) => {
        if(token != null){
          this.isLogged = true;
          this.user = this.authService.decoding(token);  
        }        
    });
  }

  logout(){
    this.authService.logout();
  }

}
