import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-bankview',
  templateUrl: './bankview.component.html',
  styleUrls: ['./bankview.component.css']
})
export class BankviewComponent implements OnInit {
  customers: Array<customer>;
  constructor(private myserve: CustomerService) {
    this.customers = [];
    this.myserve.fetchaccountFromServer();
  }
  ngOnInit(): void {
    //this.myserve.fetchaccountFromServer();
    this.myserve.getaccount().subscribe(
      res =>{ this.customers = res;
        //this.mycustomer = this.customers

             console.log(this.customers)
            // console.log(this.mycustomer)
      }
      , err => {

      }
    );
    }

}
