import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error: string;

  constructor(
    private authService: AuthService
  ) {
    
   }

  ngOnInit() {
    
  }

  login():void{
    this.authService.login(this.username, this.password);
  }

}
