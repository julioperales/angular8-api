import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RecordsComponent } from './records/records.component';


@NgModule({
  declarations: [RecordsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CmsModule { }
