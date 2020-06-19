import { Component, OnInit } from '@angular/core';
import { EmploymentService } from 'src/app/services/employment.service';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  // reactiveForm: FormGroup;
  job: any = {}

  constructor(private route: Router, private employmentService: EmploymentService) { }

  // ngOnInit() {
  //   this.reactiveForm=this.fb.group({
  //     currentEmployer:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     destination:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     currentJobDescription:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$'), Validators.maxLength(200)]],
  //     currentExperience:[null, [Validators.required, Validators.pattern('^[0-9]{2}$')]],
  //     previousEmployer:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     previousJobDescription:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$'), Validators.maxLength(200)]],
  //     previousExperience:[null, [Validators.required, Validators.pattern('^[0-9]{2}$')]]
  //   });
  // }

  // get currentEmployer(){
  //   return this.reactiveForm.get('currentEmployer');
  // }
  // get destination(){
  //   return this.reactiveForm.get('destination');
  // }
  // get currentJobDescription(){
  //   return this.reactiveForm.get('currentJobDescription');
  // }
  // get currentExperience(){
  //   return this.reactiveForm.get('currentExperience');
  // }
  // get previousEmployer(){
  //   return this.reactiveForm.get('previousEmployer');
  // }
  // get previousJobDescription(){
  //   return this.reactiveForm.get('previousJobDescription');
  // }
  // get previousExperience(){
  //   return this.reactiveForm.get('previousExperience');
  // }

  ngOnInit(): void {
    this.job = {
      currentEmployer: '',
      destination: '',
      currentJobDescription: '',
      currentExperience: '',
      previousEmployer: '',
      previousJobDescription: '',
      previousExperience: ''
    }
  }

  submitHandler() {
    console.log(this.job);
    this.employmentService.postJob(this.job).subscribe((res) => {
    alert('Employment Details posted Successfully!!')
    this.route.navigateByUrl('/register');
    })
  }
}
