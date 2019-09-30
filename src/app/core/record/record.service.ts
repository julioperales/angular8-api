import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  apiUrl = environment.apiUrl+"record";
  constructor(private http: HttpClient) { }

  getRecords():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getRecord(id: number): Observable<any> {    
    var url = this.apiUrl+"/"+id;
    return this.http.get( url );
  }

  createRecord(record: any): Observable<any>{
    var url = this.apiUrl+"/";
    return this.http.post( url, record);
  }

  updateRecord(record: any, id: number): Observable<any>{
    var url = this.apiUrl+"/"+id;
    return this.http.put( url, record);
  }

  deleteRecord(id: number): Observable<any> {    
    var url = this.apiUrl+"/"+id;
    return this.http.delete( url, { responseType: 'text' });
  }
}
