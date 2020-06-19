import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-fresher-education',
  templateUrl: './fresher-education.component.html',
  styleUrls: ['./fresher-education.component.css']
})
export class FresherEducationComponent implements OnInit {

  job: any = {}
  year: Array<String> = ['2016', '2017', '2018', '2019', '2020'];
  graduate: Array<String> = ['Yes', 'No'];

  constructor(private route: Router, private educationService: EducationService) { }

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
    this.route.navigateByUrl('/fresher');
    })
  }

}

