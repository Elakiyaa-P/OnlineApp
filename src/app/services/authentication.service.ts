import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface UserDetails {
  _id: string
  name: string
  emailId: string
  password: string
  mobile: number
  line1: string
  line2: string
  city: string
  state: string
  postalCode: number
  country: string
  year: number
  month: number
  skills: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  _id: string
  name: string
  emailId: string
  password: string
  mobile: number
  line1: string
  line2: string
  city: string
  state: string
  postalCode: number
  country: string
  year: number
  month: number
  skills: string
}

@Injectable({
  providedIn:'root'
})

export class AuthenticationService {
  private token: string;
  username:string;
  password:string;

  constructor(private http: HttpClient, private router: Router) {}

  adminLogin(){
    this.username=(<HTMLInputElement>document.getElementById('uname')).value
    this.password=(<HTMLInputElement>document.getElementById('pass')).value
    if(this.username=='Elite' && this.password=='Elite5118'){
      this.router.navigateByUrl('/admin')
    }
    else{
      alert('Logged in Failed!!!');
    }
  }

  // public loginadmin() {
  //   localStorage.setItem('ACCESS_TOKEN', "access_token");
  // }
  // public isLoggedInadmin() {
  //   return localStorage.getItem('ACCESS_TOKEN') !== null;
  // }
  // public logoutadmin() {
  //   localStorage.removeItem('ACCESS_TOKEN');
  //   this.router.navigateByUrl('/home')
  // }

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    const base = this.http.post(`http://localhost:8082/users/register`, user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`http://localhost:8082/users/login`, user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public profile(): Observable<any> {
    return this.http.get(`http://localhost:8082/users/profile`, {
      headers: { Authorization: ` ${this.getToken()}` }
    })
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/logo')
  }
}