import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHoldersComponent } from './account-holders/account-holders.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  {path: '', redirectTo: 'account-holder', pathMatch: 'full'},
  {path:'account-holder', component: AccountHoldersComponent},
  {path:'transaction', component: TransactionDetailsComponent},
  {path:'createAccount', component: CreateAccountComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
