import { Component, OnInit } from '@angular/core';
import { RajuService } from '../raju.service';

@Component({
  selector: 'app-forgetadmin',
  templateUrl: './forgetadmin.component.html',
  styleUrls: ['./forgetadmin.component.css']
})
export class ForgetadminComponent implements OnInit {
  password:any
  constructor(private services:RajuService) { 
    this.password = this.services.adminpass
  }

  ngOnInit(): void {
  }

}
