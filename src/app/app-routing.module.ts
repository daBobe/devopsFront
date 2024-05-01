import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { BidDetailsComponent } from './component/bid-details/bid-details.component';
import { SellerDashComponent } from './component/seller-dash/seller-dash.component';
import { CreateBidComponent } from './component/create-bid/create-bid.component';
import { AllBidsComponent } from './component/all-bids/all-bids.component';
import { MyBidsComponent } from './component/my-bids/my-bids.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allbids', component: AllBidsComponent },
  { path: 'details/:id', component: BidDetailsComponent },
  { path: 'dash', component: SellerDashComponent, children: [
    { path: 'create', component: CreateBidComponent },
    { path: 'myBids', component: MyBidsComponent },
    
    // Add more routes for your dashboard pages here
] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
