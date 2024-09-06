import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryService } from '../services/beneficiary.service';

@Component({
  selector: 'app-benefview',
  templateUrl: './benefview.component.html',
  styleUrls: ['./benefview.component.css']
})
export class BenefviewComponent implements OnInit {

  benefarr : Array<Beneficiary>;
  constructor(private mybenef : BeneficiaryService)
  {
    this.benefarr = [];
  }
  ngOnInit():void
  {
    this.mybenef.getbenef().subscribe(
      res => {
        this.benefarr = res;
      },
      err =>
      {
      }
    );
  }
}
