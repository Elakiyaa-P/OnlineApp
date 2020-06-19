import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JobService } from "../../services/job.service";
// import {NgForm } from 'angular/forms'

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {

  // reactiveForm: FormGroup;
  places: Array<String> = ['Chennai', 'Bangalore', 'Hyderabad', 'Kolkata', 'Pune'];
  graduate: Array<String> = ['UG', 'PG'];
  employment: Array<String> = ['Full Time', 'Part Time'];
  industry: Array<String> = ['Hardware', 'Softtware'];
  // constructor(private fb:FormBuilder, private route:Router, private jobServ:JobService) { }

  // ngOnInit(){
  //   this.reactiveForm=this.fb.group({
  //     jobId:[null, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
  //     jobTitle:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     jobPostedDate:[null, Validators.required],
  //     role:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     responsibility:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$'), Validators.maxLength(300)]],
  //     companyName:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$'), Validators.maxLength(100)]],
  //     experienceRequired:[null, [Validators.required, Validators.pattern('^[0-9]$')]],
  //     salaryPackage:[null, [Validators.required, Validators.pattern('^[0-9]*$')]],
  //     positionsAvailable:[null, [Validators.required, Validators.pattern('^[0-9]$')]],
  //     location:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     skillsRequired:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     degree:[null, Validators.required],
  //     companyInformation:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     employmentType:[null, Validators.required],
  //     industryType:[null, Validators.required],
  //     searchKeyword:[null, [Validators.required, Validators.pattern('^[A-Za-z, ]*$')]],
  //     jobDescription:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$'), Validators.maxLength(500)]]
  //   });
  // }

  // get jobId(){
  //   return this.reactiveForm.get('jobId');
  // }
  // get jobTitle(){
  //   return this.reactiveForm.get('jobTitle');
  // }
  // get jobPostedDate(){
  //   return this.reactiveForm.get('jobPostedDate');
  // }
  // get role(){
  //   return this.reactiveForm.get('role');
  // }
  // get responsibility(){
  //   return this.reactiveForm.get('responsibility');
  // }
  // get companyName(){
  //   return this.reactiveForm.get('companyName');
  // }
  // get experienceRequired(){
  //   return this.reactiveForm.get('experienceRequired');
  // }
  // get salaryPackage(){
  //   return this.reactiveForm.get('salaryPackage');
  // }
  // get positionsAvailable(){
  //   return this.reactiveForm.get('positionsAvailable');
  // }
  // get location(){
  //   return this.reactiveForm.get('location');
  // }
  // get skillsRequired(){
  //   return this.reactiveForm.get('skillsRequired');
  // }
  // get degree(){
  //   return this.reactiveForm.get('degree');
  // }
  // get companyInformation(){
  //   return this.reactiveForm.get('companyInformation');
  // }
  // get employmentType(){
  //   return this.reactiveForm.get('employmentType');
  // }
  // get industryType(){
  //   return this.reactiveForm.get('industryType');
  // }
  // get searchKeyword(){
  //   return this.reactiveForm.get('searchKeyword');
  // }
  // get jobDescription(){
  //   return this.reactiveForm.get('jobDescription');
  // }

  // submitHandler(myForm) {
  //   console.log(myForm);
  //   // console.log('Model Value', this.user);
  //   // console.log('Form Value is', myForm.value);
  // }

  constructor(private route: Router, private jobServ: JobService) { }
  job: any = {}
  ngOnInit(): void {
    this.job = {
      jobId: '',
      jobTitle: '',
      jobPostedDate: '',
      role: '',
      responsibility: '',
      companyName: '',
      experienceRequired: '',
      salaryPackage: '',
      positionsAvailable: '',
      location: '',
      skillsRequired: '',
      degree: '',
      companyInformation: '',
      employmentType: '',
      industryType: '',
      jobDescription: ''
    }
  }

  addJob() {
    console.log(this.job)
    this.jobServ.postJob(this.job).subscribe((res) => {
      alert('Job Added Successfully')
      this.route.navigateByUrl('/admin')
    })
  }
}
