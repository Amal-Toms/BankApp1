import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BanktakerComponent } from './banktaker/banktaker.component';
import { BankviewComponent } from './bankview/bankview.component';
import { BankcardComponent } from './bankcard/bankcard.component';
import { BalanceloginComponent } from './balancelogin/balancelogin.component';
import { BankeditviewComponent } from './bankeditview/bankeditview.component';
import { BankdialogComponent } from './bankdialog/bankdialog.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { BenefdialogComponent } from './benefdialog/benefdialog.component';
import { BenefeditComponent } from './benefedit/benefedit.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { MybeneftransactionComponent } from './mybeneftransaction/mybeneftransaction.component';
import { BenefviewComponent } from './benefview/benefview.component';
import { CardbenefComponent } from './cardbenef/cardbenef.component';
import { ListviewComponent } from './listview/listview.component';
import { MytransactionComponent } from './mytransaction/mytransaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { CanActivateRouteGuard } from './can--activate.guard';
import { RouterService } from './services/router.service';
import { AuthenticationService } from './services/authentication.service';
import { CustomerService } from './services/customer.service';
import { TransactionService } from './services/transaction.service';
import { BeneficiaryService } from './services/beneficiary.service';

const routes: Routes = [

  {
    path: 'maindashboard',
    component:MaindashboardComponent,
    canActivate: [CanActivateRouteGuard],
   
  },
  
  
    {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [CanActivateRouteGuard],
  children:[
  
  
  
    {
      path:'view/bankview',
      component:BankviewComponent
    },

    {
      path:'view/listview',
      component:ListviewComponent
    },
    {
      path:'customer/:bankId/edit',
     component:BankeditviewComponent,
      outlet: 'bankEditOutlet'
    },
    {
      path: '',
      redirectTo: 'view/bankview',
      pathMatch: 'full'
    }

  ]

},
{
  path: 'login',
  component: LoginComponent
},

{
  path: 'mytransactions',
  component : MytransactionComponent
},
{
  path: 'mybeneftransactions',
  component : MybeneftransactionComponent,
  canActivate: [CanActivateRouteGuard],
  children:[
    {
      path: 'mybeneficiary',
      component : BeneficiaryComponent,
      canActivate: [CanActivateRouteGuard],
    },
    {
      path:'beneficiary/:benefid/edit',
      component:BenefeditComponent,
      outlet:'benefEditOutlet'
    },
    {
      path:'beneficiaryview',
      component:BenefviewComponent
    },
    {
      path: '',
      redirectTo: 'beneficiaryview',
      pathMatch: 'full'
    }
  ]
},

{
  path: 'banktaker',
  component: BanktakerComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path:'balancelogin',
  component:BalanceloginComponent

},
{
  path:'bankaccounts',
  component:BankaccountsComponent

},

{
  path: 'home',
  component: HomeComponent
},

{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    BanktakerComponent,
    BankviewComponent,
    BankcardComponent,
    BalanceloginComponent,
    BankeditviewComponent,
    BankdialogComponent,
    BankaccountsComponent,
    BenefdialogComponent,
    BenefeditComponent,
    BeneficiaryComponent,
    MybeneftransactionComponent,
    BenefviewComponent,
    CardbenefComponent,
    ListviewComponent,
    MytransactionComponent,
    DashboardComponent,
    MaindashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule
  
  ],
  providers: [
    RouterService,
    AuthenticationService,
    CustomerService,
    CanActivateRouteGuard,
    TransactionService,
    BeneficiaryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
