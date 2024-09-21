import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotaccountPage } from './forgotaccount.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotaccountPageRoutingModule {}
