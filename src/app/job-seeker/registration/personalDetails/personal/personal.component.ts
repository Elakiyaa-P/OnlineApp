import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PersonalService } from 'src/app/services/personal.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService, TokenPayload } from 'src/app/services/authentication.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  // reactiveForm: FormGroup;
  images;
  job: any = {};
  cities: Array<String> = ['Chennai', 'Bangalore', 'Hyderabad', 'Kolkatta', 'Pune'];
  states: Array<String> = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'];

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
    // resume: ''
  }
  constructor(private auth: AuthenticationService, private route: Router, private personalService: PersonalService, private http: HttpClient) { }

  // ngOnInit() {
  //   this.reactiveForm=this.fb.group({
  //     name:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     emailId:[null, [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$')]],
  //     password:[null, [Validators.required, Validators.pattern('^[a-zA-Z0-9?=.*!@#$%^&*_\-\s]+$')]],
  //     mobile:[null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]],
  //     address:this.fb.group({
  //       line1:[null, [Validators.required, Validators.maxLength(150)]],
  //       line2:[null, [Validators.required, Validators.maxLength(150)]],
  //       city:[null, Validators.required],
  //       state:[null, Validators.required],
  //       postalCode:[null, Validators.required],
  //       country:[null, Validators.required]
  //     }),
  //     workExperience:this.fb.group({
  //       year:[null, [Validators.required, Validators.pattern('^[0-9]{4}$')]],
  //       month:[null, [Validators.required, Validators.pattern('^[0-9]{2}$')]]
  //     }),
  //     skills:[null, [Validators.required, Validators.maxLength(200)]],
  //     resume:[null, Validators.required]
  //   });
  // }

  // get name(){
  //   return this.reactiveForm.get('name');
  // }
  // get emailId(){
  //   return this.reactiveForm.get('emailId');
  // }
  // get password(){
  //   return this.reactiveForm.get('password');
  // }
  // get mobile(){
  //   return this.reactiveForm.get('mobile');
  // }
  // get line1(){
  //   const temp=<FormGroup>this.reactiveForm.controls.address;
  //   return temp.controls.line1;
  // }  
  // get line2(){
  //   const temp=<FormGroup>this.reactiveForm.controls.address;
  //   return temp.controls.line2;
  // }
  // get city(){
  //   const temp=<FormGroup>this.reactiveForm.controls.address;
  //   return temp.controls.city;
  // }
  // get state(){
  //   const temp=<FormGroup>this.reactiveForm.controls.address;
  //   return temp.controls.state;
  // }
  // get postalCode(){
  //   const temp=<FormGroup>this.reactiveForm.controls.address;
  //   return temp.controls.postalCode;
  // }
  // get country(){
  //   const temp=<FormGroup>this.reactiveForm.controls.address;
  //   return temp.controls.country;
  // }
  // get year(){
  //   const temp=<FormGroup>this.reactiveForm.controls.workExperience;
  //   return temp.controls.year;
  // } 
  // get month(){
  //   const temp=<FormGroup>this.reactiveForm.controls.workExperience;
  //   return temp.controls.month;
  // } 
  // get skills(){
  //   return this.reactiveForm.get('skills');
  // }
  // get resume(){
  //   return this.reactiveForm.get('resume');
  // }

  // ngOnInit(): void {
  //   this.job = {
  //     name: '',
  //     emailId: '',
  //     password: '',
  //     mobile: '',
  //     line1: '',
  //     line2: '',
  //     city: '',
  //     state: '',
  //     postalCode: '',
  //     country: '',
  //     year: '',
  //     month: '',
  //     skills: '',
  //     resume: ''
  //   }
  // }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>('http://localhost:8082/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  // registerration() {
  //   console.log(this.credentials);
  //   this.personalService.postJob(this.credentials).subscribe((res) => {
  //     alert('Personal Details Added Successfully!!');
  //     this.route.navigateByUrl('/register');
  //   })
  // }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.route.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }
}
