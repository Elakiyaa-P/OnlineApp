import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { Job } from '../shared/job-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  credentials: TokenPayload = {
    _id: '',
    name: '',
    emailId: '',
    password: '',
    mobile: null,
    line1: '',
    line2: '',
    city: '',
    state: '',
    postalCode: null,
    country: '',
    year: null,
    month: null,
    skills: ''
  }

  // searchTerm:String;
  text1:string;
  text2:string;
  jobs:string[];
  job:Job;
  
  constructor(private auth: AuthenticationService, private route:Router, private http:HttpClient) { }
  // emailId:string
  // password:string
  ngOnInit(): void {
    this.http.get('http://localhost:8082/api/job')
    .subscribe(data=>{
      this.jobs=data as string[]
    });
  }
  // adminLogin(){
  //   this.emailId=(<HTMLInputElement>document.getElementById('email')).value;pr
  //   this.password=(<HTMLInputElement>document.getElementById('pass')).value;
  // }

  // search(text1,text2){
  //   this.route.navigate(['/home',text1,text2]);
  // }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        alert("User Signed In Successfully!!")
        this.route.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }
}

