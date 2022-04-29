import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RajuService } from '../raju.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderid:any 
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
        console.log("response from order details is ",response)
        this.orderdata = response.cakeorders
        var len = this.orderdata.length
        this.orderid = this.orderdata[len-1].orderid
        console.log(this.orderid,len)
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
