import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryService } from '../services/beneficiary.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {

  benefobj : Beneficiary;
  beneficiaries : Array<Beneficiary> = [];
  errMessage: string ="";
  //beneflist : Beneficiary[];
  mybeneficiary = [];
  uname:string
  constructor(private mybenef : BeneficiaryService, private myroute : RouterService)
  {
    this.benefobj = new Beneficiary();

  }

  ngOnInit() {
  }
  mybenefa(){
    this.myroute.routeToMyBenefTransaction();
  }

 addbenefi()
  {
    this.uname = sessionStorage.getItem('uname')
    if (this.benefobj.User === "" || this.benefobj.User != this.uname) {
      alert("please check your username")
       this.benefobj = new Beneficiary();
     }
    else{
    this.mybenef.addbenef(this.benefobj).subscribe(
      (res) => {
      if (res) {
       // this.beneficiaries.push (this.benefobj);
       // this.benefobj = new Beneficiary ();
       //this.mybeneficiary=res;
       this.mybeneficiary.push (this.benefobj);
          this.benefobj = new Beneficiary ();
       } else {
         this.errMessage = 'We are unable to add beneficiary.';
       }
       if(res['message']=="Account Created"){
        alert("Beneficiary added successfully")
       }
       else{
         alert("Account already present")
       }
       },
       error => {
        this.errMessage = error.message;
       });
  }
  }
  // showbenef()
  // {
  //     this.mybenef.fetchdataFromServer()
  //     this.mybenef.getbenef().subscribe(
  //     res =>
  //           {
  //             //this.beneficiaries = res;
  //             this.mybeneficiary = res
  //             //console.log(res)
  //             //console.log(this.mybeneficiary)
  //           },
  //     err =>
  //           {
  //             console.log(err)
  //           }
  //   )
  // }

  goback()
  {
    this.myroute.routeBack();
  }
  transbenef()
  {
    this.myroute.routeToBenefView();
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
