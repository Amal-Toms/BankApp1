import { Component } from '@angular/core';
import { RouterService } from '../services/router.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent {
  
  constructor(private myserve: CustomerService,private myroute: RouterService) {
    this.myserve.fetchaccountFromServer();
  }

  ngOnInit(): void {
  }
  logout()
  {
    sessionStorage.clear();
    this.myroute.routeToLogin();
  }


}
