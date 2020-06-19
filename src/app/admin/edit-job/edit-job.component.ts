import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  job:any={}
  jobId:any
  places: Array<String> = ['Chennai', 'Bangalore', 'Hyderabad', 'Kolkata', 'Pune'];
  graduate: Array<String> = ['UG', 'PG'];
  employment: Array<String> = ['Full Time', 'Part Time'];
  industry: Array<String> = ['Hardware', 'Softtware'];
  constructor(private jobServ:JobService,private activeRoute:ActivatedRoute,private router:Router) {
    this.jobId=activeRoute.snapshot.params.id
   }

  ngOnInit(): void {
    this.jobServ.getJobById(this.jobId).subscribe((res)=>{
      this.job={
        _id:res['job']._id,
        jobId:res['job'].jobId,
        jobTitle:res['job'].jobTitle,
        jobPostedDate:res['job'].jobPostedDate,
        role:res['job'].role,
        responsibility:res['job'].responsibility,
        companyName:res['job'].companyName,
        experienceRequired:res['job'].experienceRequired,
        salaryPackage:res['job'].salaryPackage,
        positionsAvailable:res['job'].positionsAvailable,
        location:res['job'].location,
        skillsRequired:res['job'].skillsRequired,
        degree:res['job'].degree,
        companyInformation:res['job'].companyInformation,
        employmentType:res['job'].employmentType,
        industryType:res['job'].industryType,
        jobDescription:res['job'].jobDescription,
      }
    })
  }
  editJob(){
    this.jobServ.updateJob(this.job).subscribe((res)=>{
      alert('Job Edited Successfully')
      this.router.navigateByUrl('/admin')
    })
  }
}
