import { Injectable } from '@angular/core';
import { Beneficiary } from '../beneficiary';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  benefarr : Array<Beneficiary> = [];
  benefiSubject : BehaviorSubject<Array<Beneficiary>>;
  uname:string;
  beneficiary=new Beneficiary()
  constructor(private httpcli : HttpClient)
  {
    this.benefiSubject = new BehaviorSubject<Array<Beneficiary>>([]);
  }

  fetchdataFromServer() {
    const tok = sessionStorage.getItem('mytoken');

    return this.httpcli.get<Array<Beneficiary>>('http://127.0.0.1:7070/mybenef')
      // ,{
      //   headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
      // })
      .subscribe
      (
        res => {
          // this.uname= sessionStorage.getItem('uname')

          // this.benefarr = res.filter(i => i.User=== this.uname);
          this.uname= sessionStorage.getItem('uname')
          console.log(this.uname)
          console.log(res)
          this.benefarr = res.filter( item => item.User === this.uname);
          console.log(this.benefarr)
          this.benefiSubject.next(this.benefarr);
        },
        (err) =>
          this.benefiSubject.error(err)
      );
 }


  getbenef() : BehaviorSubject<Array<Beneficiary>>
  {

    return this.benefiSubject;
  }

  getmybenef(): Observable<Array<Beneficiary>> {
    const tok = sessionStorage.getItem('mytoken');
    return this.httpcli.get<Array<Beneficiary>> ('http://127.0.0.1:7070/mybenef',
     {
      headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
     });

  }
  /*addbenef(addbenef : Beneficiary) : Observable<Beneficiary>
  {
    //const tok = sessionStorage.getItem('mytoken');

    return this.httpcli.post<Beneficiary>('http://127.0.0.1:7070/addnewbenef', addbenef)
      /*,{
        headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
      })*/
     /* .pipe(

        tap((res) => {
          this.benefarr.push(res);
          this.benefiSubject.next(this.benefarr);

        })
      )
  } */
  addbenef(addbenef : any) : Observable<any>
  {
    const tok = sessionStorage.getItem('mytoken');

    return this.httpcli.post('http://127.0.0.1:7070/mybenef', addbenef)
      // ,{
      //   headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
      // })
      .pipe(

        tap((res : any) => {
          if(res['message'] == "Account Created"){
          this.benefarr.push(addbenef);
          this.benefiSubject.next(this.benefarr);
        }
        })
      )
  }

  /*deletebenef(id : any)
  {
    return this.httpcli.delete(`http://127.0.0.1:7070/mybenef/${id}`)
    .pipe(
      tap(
        ()=>
        {
          let ind = this.benefarr.findIndex(benefobj => benefobj.Accno === id);
          this.benefarr.splice(ind,1);
          this.benefiSubject.next(this.benefarr)
        }
      )
    )
  }

  updatebenef(updbenef : Beneficiary)
  {
    return this.httpcli.put(`http://127.0.0.1:7070/mybenef/${updbenef.Accno}`, updbenef)
    .pipe(
      tap(
        (updatebenefi: any) =>
        {
          let oldbenef = this.benefarr.find(cust => cust.Accno === updbenef.Accno);
          Object.assign(oldbenef, updatebenefi);
          this.benefiSubject.next(this.benefarr)
        }
      )
    )
  }*/

  getbenefbyid(benefid : any) : Beneficiary
  {
    const benefitems = this.benefarr.find(items => items.Accno == benefid)
    return benefitems
  }

}


