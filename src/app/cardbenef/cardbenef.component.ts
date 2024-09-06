import { Component, Input, OnInit } from '@angular/core';
import { Beneficiary } from '../beneficiary';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-cardbenef',
  templateUrl: './cardbenef.component.html',
  styleUrls: ['./cardbenef.component.css']
})
export class CardbenefComponent implements OnInit {
  @Input()
beneficiary = new Beneficiary()
  constructor(private myroute : RouterService)
  { }
  ngOnInit() : void {
  }
  beneftransaction()
  {
    this.myroute.routeToBenefEdit(this.beneficiary.Accno);
  }
  
}
