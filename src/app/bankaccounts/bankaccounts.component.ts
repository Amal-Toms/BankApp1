import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../beneficiary';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent implements OnInit {
  value:string= "login";
  benefobj : Beneficiary;
  beneficiaries : Array<Beneficiary> = [];
  errMessage: string ="";
  //beneflist : Beneficiary[];
  mybeneficiary2 = [];
  mybeneficiary1 = [];
  uname:string;
  sum=0;
  sum1=0;
  constructor(private myserve: CustomerService, private myroute : RouterService)
  {
    this.benefobj = new Beneficiary();

  }


  ngOnInit() {
    this.myserve.fetchaccountFromServer()
    this.myserve.getaccount().subscribe(
    res =>
          {
            //this.beneficiaries = res;
            this.mybeneficiary2 = res
            this.mybeneficiary2.forEach(e => {
            this.sum = this.sum + Number(e.Balance)

            //this.sum1=this.sum
            //this.sum=0
            console.log(this.sum)
            });
            //console.log(res)
            //console.log(this.mybeneficiary)
          },
    err =>
          {
            console.log(err)
          }
  )

}

showbank(){
  this.myserve.fetchaccountFromServer
  this.myserve.getaccount().subscribe(
  res =>
        {
          //this.beneficiaries = res;
          this.mybeneficiary1 = res
          //console.log(res)
          //console.log(this.mybeneficiary)
        },
  err =>
        {
          console.log(err)
        }
)
}



goback()
{
  this.myroute.routeBack();
}

/*updatemybenef()
{

}
deletemybenef()
{
  this.mybenef.deletebenef(this.benefobj.Accno).subscribe(
    res => {
      if(res['message']=="Beneficiary Deleted"){
        alert("Beneficiary Deleted successfully")
       }
       else{
         alert("Server error!!!")
    }

})
}*/


}

