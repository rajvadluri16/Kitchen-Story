import { Component, OnInit } from '@angular/core';
import {faFacebook,faInstagram,faTwitter,faGoogle} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  faFacebook = faFacebook
  faInstagram = faInstagram
  faTwitter = faTwitter
  faGoogle = faGoogle
  ngOnInit(): void {
  }

}
