import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReferralViewComponent } from './pages/referral-view/referral-view.component';
import { ReferralFilterComponent } from './components/referral-filter/referral-filter.component';
import { ReferralRecordsComponent } from './components/referral-records/referral-records.component';
import { FormsModule,FormGroup,FormControl,ReactiveFormsModule  } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReferralDetailViewComponent } from './components/referral-detail-view/referral-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopBarComponent,
    DashboardComponent,
    ReferralViewComponent,
    ReferralFilterComponent,
    ReferralRecordsComponent,
    ReferralDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
