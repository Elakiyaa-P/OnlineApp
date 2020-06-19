import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  // reactiveForm: FormGroup;
  job: any = {}
  year: Array<String> = ['2016', '2017', '2018', '2019', '2020'];
  graduate: Array<String> = ['Yes', 'No'];

  constructor(private route: Router, private educationService: EducationService) { }

  // ngOnInit() {
  //   this.reactiveForm=this.fb.group({
  //     college:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     yearPassedOn:[null, [Validators.required, Validators.pattern('^[0-9]{4}$')]],
  //     graduated:[null, Validators.required],
  //     school:[null, [Validators.required, Validators.pattern('^[A-Za-z_ ]*$')]],
  //     yearsAttended:[null, [Validators.required, Validators.pattern('^[0-9]{2}$')]],
  //     skills:[null, [Validators.required, Validators.maxLength(300)]],
  //     certification:[null, [Validators.required, Validators.maxLength(300)]]
  //   });
  // }

  // get college(){
  //   return this.reactiveForm.get('college');
  // }
  // get yearPassedOn(){
  //   return this.reactiveForm.get('yearPassedOn');
  // }
  // get graduated(){
  //   return this.reactiveForm.get('graduated');
  // }
  // get school(){
  //   return this.reactiveForm.get('school');
  // }
  // get yearsAttended(){
  //   return this.reactiveForm.get('yearsAttended');
  // }
  // get skills(){
  //   return this.reactiveForm.get('skills');
  // }
  // get certification(){
  //   return this.reactiveForm.get('certification');
  // }

  ngOnInit(): void {
    this.job = {
      college: '',
      yearPassedOn: '',
      graduated: '',
      school: '',
      yearsAttended: '',
      skills: '',
      certification: ''
    }
  }

  submitHandler() {
    console.log(this.job);
    this.educationService.postJob(this.job).subscribe((res) => {
    alert('Educational Details posted Successfully!!')
    this.route.navigateByUrl('/register');
    })
  }

}
