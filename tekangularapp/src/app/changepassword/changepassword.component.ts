import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RajuService } from '../raju.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  users:any = {

  }
  responseError:any
  constructor(private service:RajuService,private route:Router) { }
  change(){
    if(this.service.adminpass == this.users.oldpass){
      if(this.users.newpass == this.users.confirmpass){
        this.service.adminpass = this.users.newpass
        alert("Password changed")
        this.route.navigate([''])
      }
      else{
        this.responseError = "Password not matched"
      }
    }
    else{
      this.responseError = "Wrong password"
    }
  }

  ngOnInit(): void {
  }

}
