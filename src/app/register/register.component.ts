import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { register } from '../register';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


  export class RegisterComponent implements OnInit {
    register =new register()
    username = new FormControl ('', [Validators.required, Validators.pattern("^\\S{1}.{1,248}\\S{1}$")]);
    password = new FormControl ('', [Validators.required, Validators.minLength(6),Validators.pattern("^\\S{1}.{1,248}\\S{1}$")]);
    confirmpassword= new FormControl ('', [Validators.required, Validators.minLength(6), Validators.pattern("^\\S{1}.{1,248}\\S{1}$")]);
    submitMessage = '';

    constructor(private myauth: AuthenticationService, private myrout: RouterService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  validateUser() {
    let ans = '';
    if (this.username.touched) {
      if (this.username.hasError('required')) {
      ans = 'Username can not be null';
      return ans;
      }
      if(this.username.invalid){
        ans = "invalid"
        return ans;
      }
  }
    //return ans;
  }
  validatePass(): any {
    let pas: any;
    if (this.password.touched && this.password.dirty) {
      if (this.password.hasError('minlength')) {
        pas = 'must have min length 6';
        return pas;
      }
      if (this.password.invalid) {
        pas = "invalid"
        return pas;
      }
    }


  }
  logina()
  {
    this.myrout.routeToLogin()
  }
  
    registerSubmit() {
      if (this.username.value !="" && this.password.value != ""){
      if(this.password.value==this.confirmpassword.value){
      sessionStorage.setItem('user',this.username.value)
      sessionStorage.setItem('pass',this.password.value)
      
     const data = {
        username: this.username.value,
        password: this.password.value,
        //uid: this.register.id
     };
     this.myauth.authenticateUser(data).subscribe(
      (res) => {
      // const tok = res['token'];
      // this.myauth.setBearerToken(tok);
      if(res['message']=="Account Created"){
        alert("Registered Successfully!!!")
       this.myrout.routeToLogin();
      }
      else{
        alert("User already exist")
      }


      },
      (error) => {
        this.submitMessage = error;
        if (error.status === 403) {
         this.submitMessage = 'Unauthorized';
       } else {
          this.submitMessage = 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found';
        }
      }

     );
    }
    else{
      alert("Password Doesn't Match")
    }
    }
    else{
      alert("Username and Password cannot be null")
    }
  }

}
