import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../shared/job-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  // jobs: Job[];
  // text1:string;
  // text2:string;
  // job=new Job();
  jobs:any[];
  searchTerm:String
  constructor(private jobServ:JobService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.text1=this.route.snapshot.params.text1;
    // this.text2=this.route.snapshot.params.text2;
    // this.searchJobs();
    this.jobServ.getAllJobs().subscribe((res)=>{
      this.jobs=res['job']
      console.log(res)
    })
  }

  // searchJobs(){
  //   this.jobServ.getAllJobs().subscribe(data=>{
  //     this.jobs=data;
  //     for(let i=0;i<this.jobs.length;i++){
  //       this.job=this.jobs[i];
  //     }
  //   })
  // }
}

