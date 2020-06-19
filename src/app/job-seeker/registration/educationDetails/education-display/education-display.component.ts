import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-display',
  templateUrl: './education-display.component.html',
  styleUrls: ['./education-display.component.css']
})
export class EducationDisplayComponent implements OnInit {

  jobs:any=[]

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getAllJobs().subscribe((res)=>{
      this.jobs=res['education']
      console.log(res)
    })
  }

  jobDelete(id:any){
    this.educationService.deleteJob(id).subscribe((res)=>{
      alert('Education Detail Deleted Successfully!')
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
