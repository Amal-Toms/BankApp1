import { Injectable } from '@angular/core';
import { transactions } from '../transactions';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { benefitransaction } from '../benefitransaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionarr : Array<transactions> = [];
  transactionSubject : BehaviorSubject<Array<transactions>>;
  benefarr : Array<benefitransaction>=[];
  benefSubject : BehaviorSubject<Array<benefitransaction>>;
  // benefobj=new Beneficiary();

  constructor(private httpcli : HttpClient) 
  { 
    this.transactionSubject = new BehaviorSubject<Array<transactions>>([]);
    this.benefSubject = new BehaviorSubject<Array<benefitransaction>>([]);
  }

  fetchdataFromServer() {
    const tok = sessionStorage.getItem('mytoken');

    return this.httpcli.get<Array<transactions>>('http://127.0.0.1:7070/myacctrans',
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
      })
      .subscribe
      (
        res => {
          this.transactionarr = res;
          this.transactionSubject.next(this.transactionarr);
        },
        (err) =>
          this.transactionSubject.error(err)
      );
 }

  getdata(): BehaviorSubject<Array<transactions>> {
    return this.transactionSubject;
 }

  adddata(acnt: transactions): Observable<transactions> {
    const tok = sessionStorage.getItem('mytoken');

    return this.httpcli.post<transactions>('http://127.0.0.1:7070/myacctrans', acnt,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
      })
      .pipe(

        tap((res) => {
          if(res['message'] == "Transaction Successful"){
          this.transactionarr.push(acnt);
          this.transactionSubject.next(this.transactionarr);
          }
        })
      )
  }

  addbeneftrans(acnt : any): Observable<any> {
    const tok = sessionStorage.getItem('mytoken');

    return this.httpcli.post('http://127.0.0.1:7070/mybeneftrans', acnt,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)
      })
      .pipe(

        
        tap((res) => {
          if(res['message'] == "Transaction Successful"){
          this.benefarr.push(acnt);
          this.benefSubject.next(this.benefarr);
      }
        }
      )
      )
  }

}
