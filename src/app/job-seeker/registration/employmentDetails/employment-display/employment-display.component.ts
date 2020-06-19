import { Component, OnInit } from '@angular/core';
import { EmploymentService } from 'src/app/services/employment.service';

@Component({
  selector: 'app-employment-display',
  templateUrl: './employment-display.component.html',
  styleUrls: ['./employment-display.component.css']
})
export class EmploymentDisplayComponent implements OnInit {
  
  jobs:any=[]

  constructor(private employmentService: EmploymentService) { }

  ngOnInit(): void {
    this.employmentService.getAllJobs().subscribe((res)=>{
      this.jobs=res['employment']
      console.log(res)
    })
  }

  jobDelete(id:any){
    this.employmentService.deleteJob(id).subscribe((res)=>{
      alert('Employment Detail Deleted Successfully!')
      this.ngOnInit()
    })
  }
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

}

