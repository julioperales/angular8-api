import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './modules/auth/login/login.component';
import {RecordsComponent} from './modules/cms/records/records.component'



const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'cms', component : RecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
