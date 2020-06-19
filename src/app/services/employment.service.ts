import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  constructor(private http:HttpClient) { }

  public postJob(Employment:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8082/api/employment`,Employment)
  }
  public getAllJobs():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8082/api/employment`)
  }
  public getJobById(Id:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8082/api/employment/${Id}`)
  }
  public updateJob(Employment:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8082/api/employment`,Employment)
  }
  public deleteJob(Id:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8082/api/employment/${Id}`)
  }
}
