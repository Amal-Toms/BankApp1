import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BankdialogComponent } from '../bankdialog/bankdialog.component';


@Component({
  selector: 'app-bankeditview',
  templateUrl: './bankeditview.component.html',
  styleUrls: ['./bankeditview.component.css']
})

export class BankeditviewComponent implements OnInit {

  banksid : any;

  constructor(private mydialog : MatDialog, private actrout : ActivatedRoute) 
  { 
    this.banksid = this.actrout.snapshot.paramMap.get("bankId")
    this.mydialog.open(BankdialogComponent, 
      {
        data : this.banksid
      });
  }

  ngOnInit() {
  }

}
