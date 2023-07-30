import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReferralViewComponent } from './pages/referral-view/referral-view.component';
import { ReferralFilterComponent } from './components/referral-filter/referral-filter.component';
import { ReferralRecordsComponent } from './components/referral-records/referral-records.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    AboutComponent,
    TopBarComponent,
    DashboardComponent,
    ReferralViewComponent,
    ReferralFilterComponent,
    ReferralRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
