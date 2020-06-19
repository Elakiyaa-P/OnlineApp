import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalService } from 'src/app/services/personal.service';


@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.css']
})
export class PersonalEditComponent implements OnInit {

  job: any = {};
  Id: any;
  cities: Array<String> = ['Chennai', 'Bangalore', 'Hyderabad', 'Kolkatta', 'Pune'];
  states: Array<String> = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'];
  constructor(private personalService: PersonalService, private activeRoute: ActivatedRoute, private router: Router) {
    this.Id = activeRoute.snapshot.params.id
  }
  
  ngOnInit(): void {
    this.personalService.getJobById(this.Id).subscribe((res) => {
      this.job = {
        _id: res['job']._id,
        name: res['job'].name,
        emailId: res['job'].emailId,
        password: res['job'].password,
        mobile: res['job'].mobile,
        line1: res['job'].line1,
        line2: res['job'].line2,
        city: res['job'].city,
        state: res['job'].state,
        postalCode: res['job'].postalCode,
        country: res['job'].country,
        year: res['job'].year,
        month: res['job'].month,
        skills: res['job'].skills,
        resume: res['job'].resume
      }
    })
  }

  editJob() {
    this.personalService.updateJob(this.job).subscribe((res) => {
      alert('Personal Details Edited Successfully')
      this.router.navigateByUrl('/job-seeker/personal-display')
    })

  }
}