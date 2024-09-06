import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BenefdialogComponent } from '../benefdialog/benefdialog.component';

@Component({
  selector: 'app-benefedit',
  templateUrl: './benefedit.component.html',
  styleUrls: ['./benefedit.component.css']
})
export class BenefeditComponent implements OnInit {

  benefsid : any;

  constructor(private mydialog : MatDialog, private actrout : ActivatedRoute) 
  { 
    this.benefsid = this.actrout.snapshot.paramMap.get("benefid")
    this.mydialog.open(BenefdialogComponent,
      {
        data : this.benefsid
      });
  }

  ngOnInit() {
  }

}
