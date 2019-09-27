import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './material/CustomMaterialModule';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
