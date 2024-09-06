import { Component, Input, OnInit } from '@angular/core';
import { customer } from '../customer';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  @Input()
  customer = new customer();
  customers: Array<customer> = [];
  sbi: Array<customer>;
  hdfc: Array<customer>;
  icici: Array<customer>;
  others: Array<customer>;
  constructor(private myserv: CustomerService, private myrout:RouterService) {}
  ngOnInit(): void {
   this.myserv.getaccount().subscribe(
    res => {
      this.customers = res;
      this.filterdata(this.customers);

    }

   );
  }
   filterdata(cust1: Array<customer>) {
    this.sbi = cust1.filter ( item => item.Bank === 'SBI'|| item.Bank === 'sbi');
    this.hdfc = cust1.filter ( item => item.Bank === 'HDFC'|| item.Bank === 'hdfc');
    this.icici = cust1.filter ( item => item.Bank === 'ICICI'|| item.Bank === 'icici');
    this.others = cust1.filter (item => (item.Bank !== 'SBI') && (item.Bank !== 'HDFC') && (item.Bank !== 'ICICI')&&(item.Bank !== 'sbi') && (item.Bank !== 'hdfc') && (item.Bank !== 'icici'));
   }
   transaction() {
    this.myrout.routeToBankEditView(this.customer.Accno);
  }
   

}
