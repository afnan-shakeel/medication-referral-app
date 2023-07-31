import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReferralViewComponent } from './pages/referral-view/referral-view.component';
import { ReferralFilterComponent } from './components/referral-filter/referral-filter.component';
const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'referral',
    component: ReferralViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
