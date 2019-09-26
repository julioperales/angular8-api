import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './material/CustomMaterialModule';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CustomMaterialModule
  ]
})
export class SharedModule { }
