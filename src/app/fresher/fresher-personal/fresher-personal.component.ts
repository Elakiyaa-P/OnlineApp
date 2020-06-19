import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalService } from 'src/app/services/personal.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fresher-personal',
  templateUrl: './fresher-personal.component.html',
  styleUrls: ['./fresher-personal.component.css']
})
export class FresherPersonalComponent implements OnInit {

  images;
  job: any = {};
  cities: Array<String> = ['Chennai', 'Bangalore', 'Hyderabad', 'Kolkatta', 'Pune'];
  states: Array<String> = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'];
  constructor(private route: Router, private personalService: PersonalService, private http:HttpClient) { }


  ngOnInit(): void {
    this.job = {
      name: '',
      emailId: '',
      password: '',
      mobile: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      year: '',
      month: '',
      skills: '',
      resume: ''
    }
  }

  selectImage(event){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.images=file
    }
  }

  onSubmit(){
    const formData=new FormData();
    formData.append('file',this.images);
    this.http.post<any>('http://localhost:8082/file', formData).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );
  }

  register() {
    console.log(this.job);
    this.personalService.postJob(this.job).subscribe((res) => {
      alert('Personal Details Added Successfully!!');
      this.route.navigateByUrl('/fresher');
    })
  }

}

