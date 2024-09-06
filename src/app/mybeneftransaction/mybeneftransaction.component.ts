import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../beneficiary';
import { benefitransaction } from '../benefitransaction';
import { customer } from '../customer';
import { BeneficiaryService } from '../services/beneficiary.service';
import { RouterService } from '../services/router.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-mybeneftransaction',
  templateUrl: './mybeneftransaction.component.html',
  styleUrls: ['./mybeneftransaction.component.css']
})
export class MybeneftransactionComponent implements OnInit {


  beneftransobj : benefitransaction;
  beneftransactionarr : Array<benefitransaction> = [];
  errMessage: string ="";
  mybeneftransactions : [];
  benefi : Beneficiary

  constructor(private mybenef : BeneficiaryService)
  {
    this.mybenef.fetchdataFromServer();
  }

  ngOnInit() {
  }

}