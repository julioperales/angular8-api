import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordService } from '../../../core/record/record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  records: Observable<any[]>;

  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit() {
  }

  private reloadData(){
    this.records = this.recordService.getRecords();
  }

  public getAll(){    
    this.reloadData();
    console.log("Get all: ", this.records);
  }

  public getOne(id: number){
    var record = this.recordService.getRecord(id);
    console.log("Get one", record);
  }

  public create(record: any){
    console.log("Create one");
    this.recordService.createRecord(record)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );    
    
  }

  public update(record: any, id: number){
    console.log("Update one");
    this.recordService.updateRecord(record, id)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    ); 
  }

  public delete(id:number){
    console.log("Delete One");

    this.recordService.deleteRecord(id)
    .subscribe(
      data => {
        console.log(data);
        
      },
      error => console.log(error));

  }

}
