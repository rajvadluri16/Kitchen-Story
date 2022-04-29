import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RajuService } from '../raju.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  orderdata:any
  constructor(private service:RajuService) {
    var url = "https://apifromashu.herokuapp.com/api/cakeorders"
    let myheader = new HttpHeaders()
    myheader = myheader.append("authtoken",localStorage["token"])
    var options = {
      headers: myheader
    }
    var body = {}
    this.service.getorderdetails(url,body,options).subscribe({
      next:(response:any)=>{
        console.log("response from order details is ",response,response.cakes)
        this.orderdata = response.cakeorders
        // for(let x of this.orderdata.cakes){
        //   console.log("data",x,x.name)
        // }
      },
      error:(error)=>{
        console.log("error from order details is",error)
      }
    })
   }

  ngOnInit(): void {
  }

}
