import { Component, Input, OnInit } from '@angular/core';
import { customer } from '../customer';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-bankcard',
  templateUrl: './bankcard.component.html',
  styleUrls: ['./bankcard.component.css']
})
export class BankcardComponent implements OnInit {

  @Input()
  customer = new customer();
  constructor( private myrout:RouterService) {
  }
  ngOnInit(): void {
  }
  transaction() {
    this.myrout.routeToBankEditView(this.customer.Accno);
  }
  viewstatement(){


      // alert("check your Balance");
      // alert(this.customer.Balance);
      this.myrout.routeToBalanceLogin()
     }
   
   }
   
  


