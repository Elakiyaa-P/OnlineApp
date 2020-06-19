import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // credentials: TokenPayload={
  //   _id: '',
  //   emailId: '',
  //   password: ''
  // }
  constructor( private router: Router) { }
  // emailId:string
  // password:string

  // login(){
  //   this.auth.login(this.credentials).subscribe(
  //     ()=>{
  //       this.router.navigateByUrl('/profile')
  //     },
  //     err=>{
  //       console.error(err);
        
  //     }
  //   )
  // }

  ngOnInit(): void {
  }
  // adminLogin(){
  //   this.emailId=(<HTMLInputElement>document.getElementById('email')).value;
  //   this.password=(<HTMLInputElement>document.getElementById('pass')).value;
  // }

}
