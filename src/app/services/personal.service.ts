import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http:HttpClient) { }

  public postJob(Personal:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8082/api/personal`,Personal)
  }
  public getAllJobs():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8082/api/personal`)
  }
  public getJobById(Id:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8082/api/personal/${Id}`)
  }
  public updateJob(Personal:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8082/api/personal`,Personal)
  }
  public deleteJob(Id:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8082/api/personal/${Id}`)
  }
}


