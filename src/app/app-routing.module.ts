import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHoldersComponent } from './account-holders/account-holders.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {path:'account-holder', component: AccountHoldersComponent},
  {path:'transaction', component: TransactionDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
