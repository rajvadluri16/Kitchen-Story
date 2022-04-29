import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { url } from 'inspector';
import { RajuService } from '../raju.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private service : RajuService, private router:Router) { 
    this.service.email = this.users.email
    
  }
  flag:any
  users:any = {
    email:"",
    password:""
  }
  tokenmsg:any
  responseError:any
  navigate:any = this.service.navigate
  login(){
    var url="https://apifromashu.herokuapp.com/api/login"
    
        this.service.login(url,this.users).subscribe(
      {
        next:(response:any) => {
          console.log("the response of login",response)
          this.flag=true
          this.service.email = this.users.email
          if(response.token){
            localStorage["token"] = response.token
            this.router.navigate([this.navigate])
          }
          else{
            this.responseError = "invlid login details"
          }
          if(this.users.email == this.service.adminemail && this.users.password==this.service.adminpass){
            localStorage["loggedinUser"] = this.service.adminemail
          }
          
        },
        error:(error:any)=>{
          console.log("error is",error)
        }
      })
      console.log("email is",this.service.email)
  }
  logot(){
    localStorage.removeItem("token")

  }
  forget(){
    this.service.email = this.users.email
    this.router.navigate(["/forgetpassword"])
  }

  ngOnInit(): void {
  }

}
