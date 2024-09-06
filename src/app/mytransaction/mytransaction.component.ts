import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { RouterService } from '../services/router.service';
import { TransactionService } from '../services/transaction.service';
import { transactions } from '../transactions';

@Component({
  selector: 'app-mytransaction',
  templateUrl: './mytransaction.component.html',
  styleUrls: ['./mytransaction.component.css']
})
export class MytransactionComponent implements OnInit {

  transobj : transactions;
  transactionarr : Array<transactions> = [];
  errMessage: string ="";
  mytransactions : [];
  bank : customer

  constructor(private myroute : RouterService, private mytrans : TransactionService) 
  {
    this.transobj = new transactions();
   }

  ngOnInit() {
  }

  callcancel()
  {
    this.myroute.routeToDashboard();
  }

  callsub()
  {
    if((this.transobj.amount == null) || (this.transobj.toIFSC == null) || (this.transobj.tobank == null) || (this.transobj.amount == null))
   {
      alert("Please fill in the required details to proceed")
      
   }
    else if(this.transobj.amount == 0)
    {
      alert("Please enter an amount")
    }
   // if(this.bank.Balance >= this.transobj.amount)
     // {
     //   var confirmation = confirm("Are you sure you want to continue?");
  
      //  if(confirmation == true)
       // {
         else{
          this.mytrans.adddata(this.transobj).subscribe(
            (res) => {
              if (res) {
                this.transactionarr.push (this.transobj);
                this.transobj = new transactions ();
               } else {
                 this.errMessage = 'We are unable to process';
               }
               if(res['message']=="Transaction Successful"){
                alert("Transaction Completed")
               }
               else{
                 alert("Transaction failed")
               }
               },
               error => {
                this.errMessage = error.message;
               });
       // }
              }
     // }
      //else 
    //  {
     //   alert("Transaction cannot be processed. Please check your balance");
    //  }

}
}
