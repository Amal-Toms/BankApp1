import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { register } from '../register';
import { AuthenticationService } from '../services/authentication.service';
import { CustomerService } from '../services/customer.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username = new FormControl ('', Validators.required);
    password = new FormControl ('', [Validators.required, Validators.minLength(6)]);
    submitMessage = '';
    errMessage = '';
    specific_user:any;
    specific_pass:any;
    m=[]
    registers : Array<register>;
    regobj:register;
    bid:number;
    flag : boolean = true;
    constructor(private myauth: AuthenticationService, private myrout: RouterService, private myserve: CustomerService) {
      this.registers = [];
    }

    validateUser() {
      let ans = '';
      if (this.username.touched) {
        if (this.username.hasError('required')) {
        ans = 'Uname can not be null';
        }
    }
      return ans;
    }
    validatePass() {
      let ans = '';
      if (this.password.touched && this.password.dirty) {
        if (this.password.hasError('minlength')) {
        ans = 'Password shoud be min of 6 length';
        }
    }
      return ans;
  }

  ngOnInit(){


  }
  register(){
    this.myrout.routeToRegister();
  }


 loginSubmit() {
  this.myserve.getReg().subscribe(
   (res)=>{
   this.registers=res
   //console.log(this.registers)
   //console.log(this.registers[0].username)
   //console.log(this.registers["data"]);
   this.m=this.registers["data"]
  //  console.log(this.username.value)
  //  console.log(this.m[0][0])
  //  if(this.m[0][0] === this.username.value){
  //    this.myrout.routeToDashboard()
  //    console.log(this.username.value)
  //    console.log(this.m[0][0])


  //  }

  
 for(var i = 0; i < this.m.length; i++){
    if(this.m[i][0]==this.username.value && this.m[i][1]== this.password.value){
          this.specific_user=sessionStorage.setItem('uname',this.m[i][0])
          console.log(this.m[i][0])
          this.specific_pass=sessionStorage.setItem('pass',this.m[i][1])
          this.flag = false;
          this.myrout.routeToMaindashboard();

        }
    
}
if(this.flag){
  alert("Invalid credentials");
 // this.flag
}

   }
   );

  }
}

