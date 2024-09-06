import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Beneficiary } from '../beneficiary';
import { benefitransaction } from '../benefitransaction';
import { customer } from '../customer';
import { BeneficiaryService } from '../services/beneficiary.service';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-benefdialog',
  templateUrl: './benefdialog.component.html',
  styleUrls: ['./benefdialog.component.css']
})
export class BenefdialogComponent implements OnInit, OnDestroy {

  bank : customer;
  errMessage  :string;
  beneftransactions : benefitransaction;
  benefobj : Beneficiary;

  constructor(private mdialog : MatDialogRef<BenefdialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data : any, 
    private myroute : RouterService, private mycustomers : CustomerService, 
    private mydata : TransactionService, private mybenef : BeneficiaryService) 
    { 
      this.benefobj = this.data;
      this.beneftransactions = new benefitransaction();
      

    }

  ngOnInit() : void 
  {
    this.benefobj = this.mybenef.getbenefbyid(this.data);
  }

  ngOnDestroy() : void
  {
    this.myroute.routeBack();
  }
  callcancel()
  {
    this.mdialog.close();
  }

  callsubmit()
  {
    if((this.beneftransactions.Accno == null) || (this.beneftransactions.frombank == null) || (this.beneftransactions.amount == null) || (this.beneftransactions.fromIFSC == null))
    {
      alert("Please fill in the required details to proceed")
    }
    else if(this.beneftransactions.amount == 0)
    {
      alert("Please enter an amount")
    }
    else
    {
      if(this.beneftransactions.amount >= 500)
      {
        var confirmation = confirm("Are you sure you want to continue?");
        if(confirmation == true)
        {
          this.mydata.addbeneftrans(this.beneftransactions).subscribe(
            res =>
               {
                console.log("saved");
                //console.log(res)
                this.beneftransactions = new benefitransaction();
                this.mdialog.close();
                if(res['message']=="Transaction Successful"){
                  alert("Transaction Completed")
                 }
                 else{
                   alert("Transaction failed")
                 }
               },
            err =>
               {
                 this.errMessage = "Http failure response for http://127.0.0.1:7070/mybeneftrans: 404 Not Found"
               }      
          )
          //this.bank.Balance = (this.bank.Balance - this.transactions.amount);
          //this.mycustomers.editaccount(this.bank).subscribe(
          //  res => {
            //  console.log(this.bank.Balance);
          //  },
          //  err =>
           // {
            //  console.log(err)
           // }
        //  )
        }
        else
        {
         this.mdialog.close();
        }
      }
      else
      {
        alert("Transaction cannot be processed. Please check your balance");
      }
    }
  }
}
