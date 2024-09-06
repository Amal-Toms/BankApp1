import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-balancelogin',
  templateUrl: './balancelogin.component.html',
  styleUrls: ['./balancelogin.component.css']
})
export class BalanceloginComponent implements OnInit {
  custobj :Number
  customers : Array<customer>=[]
   constructor(private myserve:CustomerService, private myrout: RouterService) { }
 
   ngOnInit() {
   }
     submit(){
       this.myserve.getaccount().subscribe(
         (res) =>{
           this.customers=res;
           this.customers.forEach(i =>{
             console.log("inside");
             if (i.Accno == this.custobj){
               alert(i.Balance)
 
                 }
 
         }
       )
     }
       )
 }
 ok(){
   this.myrout.routeToDashboard()
 }
 }
 
