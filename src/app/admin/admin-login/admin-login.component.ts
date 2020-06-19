import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private route:Router) { }
  username:string
  password:string
  ngOnInit(): void {
  }

  adminLogin(){
    this.username=(<HTMLInputElement>document.getElementById('uname')).value
    this.password=(<HTMLInputElement>document.getElementById('pass')).value
    if(this.username=='Elite' && this.password=='Elite5118'){
      alert('Logged in Successfully!!!')
      this.route.navigateByUrl('/admin')
    }
  }

}
