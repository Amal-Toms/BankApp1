import { Component } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private myroute: RouterService) {
  }

  value:string="Login";

  login(){
    if(this.value === "Login"){
    this.myroute.routeToLogin();
    this.value="Home"
    }
    else{
     this.myroute.routeToHome();
    this.value="Login"
  }
  
  }

  register(){
    this.myroute.routeToRegister();
  }

}
