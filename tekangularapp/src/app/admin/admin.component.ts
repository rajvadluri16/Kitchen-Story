import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RajuService } from '../raju.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
    if(this.users.email == this.service.adminemail && this.users.password==this.service.adminpass){
      localStorage["loggedinUser"] = this.users.email
      this.service.isAdmin = true
      this.router.navigate([""])
    }
    else{
      this.responseError = "invlid login details"

    }
    var url="https://apifromashu.herokuapp.com/api/login"
        this.users.password = 123
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
            this.service.isAdmin = true
          }
          else{
            this.responseError = "invlid login details"
          }
          
        },
        error:(error:any)=>{
          console.log("error is",error)
        }
      })
      console.log("email is",this.service.email)
  }
  change(){
    this.router.navigate(["/changepassword"])

  }
  forget(){
    this.service.email = this.users.email
    this.router.navigate(["/forgetpassword"])
  }
  ngOnInit(): void {
  }

}
