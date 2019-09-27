import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './modules/auth/login/login.component';
import {RecordsComponent} from './modules/cms/records/records.component'
import { AuthGuardService } from './core/auth/auth-guard.service';



const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'cms', component : RecordsComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
