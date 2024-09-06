import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private routeserve: Router, private locn : Location) { }

  routeToDashboard() {
    this.routeserve.navigate(['dashboard'])
  }

  routeToLogin() {
    this.routeserve.navigate(['login'])
  }
  routeToMaindashboard(){
    this.routeserve.navigate(['maindashboard'])
  }

  routeToBankEditView(bankId : any) {
    this.routeserve.navigate(['dashboard', {
      outlets: {
        bankEditOutlet: ['customer', bankId, 'edit'],
      }
    }]);
  }
  routeToBenefEdit(benefid : any) {
    this.routeserve.navigate(['mybeneftransactions', {
      outlets: {
        benefEditOutlet: ['beneficiary', benefid, 'edit'],
      }
    }]);
  }

  routeBack() {
    this.locn.back();
  }
routeToRegister(){
  this.routeserve.navigate(['register'])
}
routeToBankTaker(){
  this.routeserve.navigate(['banktaker'])
}
 routeToBankView() {
   this.routeserve.navigate(['dashboard/view/bankview'])
  }

  routeToListView() {
    this.routeserve.navigate(['dashboard/view/listview'])
  }
  routeToHome(){
    this.routeserve.navigate(['home'])
  }
  routeToBalanceLogin(){
    this.routeserve.navigate(['balancelogin'])
  }
  routeToBeneficiary(){
    this.routeserve.navigate(['mybeneficiary'])
  }
  routeToMyTransaction(){
    this.routeserve.navigate(['mytransactions'])
  }
  
  routeToMyBenefTransaction(){
    this.routeserve.navigate(['mybeneftransactions'])
  }
  
    
  routeToBenefView(){
    this.routeserve.navigate(['mybeneftransactions/beneficiaryview'])
  }

}
