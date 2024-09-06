import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myserve: CustomerService) {
    this.myserve.fetchaccountFromServer();
  }

  ngOnInit(): void {
  }

}
