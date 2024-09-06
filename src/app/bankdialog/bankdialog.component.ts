import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Beneficiary } from '../beneficiary';
import { customer } from '../customer';
import { BeneficiaryService } from '../services/beneficiary.service';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';
import { TransactionService } from '../services/transaction.service';
import { transactions } from '../transactions';

@Component({
  selector: 'app-bankdialog',
  templateUrl: './bankdialog.component.html',
  styleUrls: ['./bankdialog.component.css']
})
export class BankdialogComponent implements OnInit, OnDestroy {

  bank : customer;
  errMessage  :string;
  transactions : transactions;
  state : Array<Beneficiary> = [];
  benefobj : Beneficiary;

  constructor(private mdialog : MatDialogRef<BankdialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data : any, 
    private myroute : RouterService, private mycustomers : CustomerService, 
    private mydata : TransactionService, private mybenef : BeneficiaryService) 
    { 
      this.bank = this.data;
      this.transactions = new transactions();
      this.benefobj = new Beneficiary();
     
    }

  ngOnInit() :void
  {
    this.bank = this.mycustomers.getaccountById(this.data);
    this.benefobj = this.mybenef.getbenefbyid(this.benefobj.Accno)
    
  }

  ngOnDestroy() : void
  {
    this.myroute.routeBack();
  }

  callsubmit()
  {
    if((this.transactions.Accno == null) || (this.transactions.tobank == null) || (this.transactions.amount == null) || (this.transactions.toIFSC == null))
    {
      alert("Please fill in the required details to proceed")
      
    }

    else if(this.transactions.amount == 0)
    {
      alert("Please enter an amount")
    }

    else
    {

      if(this.bank.Balance >= this.transactions.amount)
      {
        var confirmation = confirm("Are you sure you want to continue?");
  
        if(confirmation == true)
        {
          this.mydata.adddata(this.transactions).subscribe(
            res =>
               {
                console.log("saved");
                //console.log(res)
                this.transactions = new transactions();
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
                 this.errMessage = "Http failure response for http://127.0.0.1:7070/myacctrans: 404 Not Found"
               }      
          )
               
          this.bank.Balance = (this.bank.Balance - this.transactions.amount);
          
          this.mycustomers.editaccount(this.bank).subscribe(
            res => {
              
              console.log(this.bank.Balance);
           },
            err =>
            {
              console.log(err)
            }
          )
  
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

  callcancel()
  {
    this.mdialog.close();
  }

}
