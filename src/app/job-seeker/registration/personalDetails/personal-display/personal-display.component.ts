import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-personal-display',
  templateUrl: './personal-display.component.html',
  styleUrls: ['./personal-display.component.css']
})
export class PersonalDisplayComponent implements OnInit {

  jobs:any=[]
  constructor(private personalService:PersonalService) { }

  ngOnInit(): void {
    this.personalService.getAllJobs().subscribe((res)=>{
      this.jobs=res['personal']
      console.log(res)
    })
  }

  jobDelete(id:any){
    this.personalService.deleteJob(id).subscribe((res)=>{
      alert('Personal Detail Deleted Successfully!')
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
