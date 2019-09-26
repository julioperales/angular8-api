import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  error: string;

  constructor() {
    
   }

  ngOnInit() {
  }

  login():void{

  }

}
