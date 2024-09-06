import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-banktaker',
  templateUrl: './banktaker.component.html',
  styleUrls: ['./banktaker.component.css']
})

export class BanktakerComponent implements OnInit {
  errMessage: string ="";
 custobj: customer;
 customers: Array<customer> = [];
 isNoteView = true;
uname:string;
  constructor(private mycust: CustomerService, private myrout: RouterService) {
    this.custobj = new customer();
    //this.custobj.bid= Number(sessionStorage.getItem('bid'))
  }
  changeView() {
    if (!this.isNoteView) {
      this.myrout.routeToBankView();
      this.isNoteView = true;
    } else {
      this.myrout.routeToListView();
      this.isNoteView = false;
    }
  }
  ngOnInit() {

  }

    Add() {
      this.uname = sessionStorage.getItem('uname')
      if (this.custobj.Accno === 0 || this.custobj.IFSC === '') {
        this.errMessage = 'bank account number and IFSC are required field ';
      }
      if (this.custobj.UIC === "" || this.custobj.UIC != this.uname) {
       alert("please check your username")
        this.custobj = new customer ();
      }
      else{

      this.mycust.addaccount(this.custobj).subscribe(
        (res) => {
        //if(this.custobj.UIC== this.uname){
        if (res) {
          this.customers.push (this.custobj);
          this.custobj = new customer ();
        //}
         } else {
           this.errMessage = 'We are unable to add account - username is incorrect';
         }

         if(res['message']=="Account Created"){
          alert("Account added successfully")
         }
         else{
           alert("Account already present")
         }

         },
         error => {
          this.errMessage = error.message;
         });
        }

    }

    }
