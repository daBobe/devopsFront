import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { BidDetailsComponent } from './component/bid-details/bid-details.component';
import { SellerDashComponent } from './component/seller-dash/seller-dash.component';
import { CreateBidComponent } from './component/create-bid/create-bid.component';
import { AllBidsComponent } from './component/all-bids/all-bids.component';
import { MyBidsComponent } from './component/my-bids/my-bids.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    BidDetailsComponent,
    SellerDashComponent,
    CreateBidComponent,
    AllBidsComponent,
    MyBidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
