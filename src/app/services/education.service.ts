import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  public postJob(Education:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8082/api/education`,Education)
  }
  public getAllJobs():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8082/api/education`)
  }
  public getJobById(Id:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8082/api/education/${Id}`)
  }
  public updateJob(Education:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8082/api/education`,Education)
  }
  public deleteJob(Id:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8082/api/education/${Id}`)
  }
}
