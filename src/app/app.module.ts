import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { MyaccountMainComponent } from './view/my-account/myaccount-main/myaccount-main.component';
import { ListsQuotesComponent } from './view/my-account/lists-quotes/lists-quotes.component';
import { OrdersComponent } from './view/my-account/orders/orders.component';
import { BasketMainComponent } from './view/basket/basket-main/basket-main.component';

// navi 
import { NavMenuComponent } from './view/nav/nav-menu/nav-menu.component';
import { FooterComponent } from './view/nav/footer/footer.component';
import { HomepageMainComponent } from './view/homepage/homepage-main/homepage-main.component';
import { HomepageSlideComponent } from './view/homepage/homepage-slide/homepage-slide.component';

//navi main category
import { ClothingShoesMainComponent } from './view/nav/clothing-shoes-main/clothing-shoes-main.component';
import { CurtainsMatsMainComponent } from './view/nav/curtains-mats-main/curtains-mats-main.component';
import { SewingFabricsMainComponent } from './view/nav/sewing-fabrics-main/sewing-fabrics-main.component';
import { FlowersFunctionMainComponent } from './view/nav/flowers-function-main/flowers-function-main.component';
import { BeadsJewelleryMainComponent } from './view/nav/beads-jewellery-main/beads-jewellery-main.component';
import { StationeryToysMainComponent } from './view/nav/stationery-toys-main/stationery-toys-main.component';
import { HomeLivingMainComponent } from './view/nav/home-living-main/home-living-main.component';

// product main
import { WomenMainComponent } from './view/category/women/women-main/women-main.component';
import { MenMainComponent } from './view/category/men/men-main/men-main.component';
import { ToysMainComponent } from './view/category/toys/toys-main/toys-main.component';
import { TechnologyComponent } from './view/category/technology/technology.component';
import { FlowersMainComponent } from './view/category/flowers/flowers-main/flowers-main.component';
import { KidsMainComponent } from './view/category/kids-main/kids-main.component';
import { CurtainsMainComponent } from './view/category/curtains-main/curtains-main.component';
import { MatsMainComponent } from './view/category/mats-main/mats-main.component';
import { SewingMainComponent } from './view/category/sewing-main/sewing-main.component';
import { FabricsMainComponent } from './view/category/fabrics-main/fabrics-main.component';
import { BeadsMainComponent } from './view/category/beads-main/beads-main.component';
import { StationeryMainComponent } from './view/category/stationery-main/stationery-main.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: '', component: HomepageMainComponent, pathMatch: 'full' },
/*  { path: 'counter', component: CounterComponent },*/
  { path: 'counter/:id', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },

  { path: 'my-account', component: FetchDataComponent },
  { path: 'basket', component: FetchDataComponent },


  { path: 'category/women', component: WomenMainComponent },
  { path: 'category/men', component: MenMainComponent},
  { path: 'category/toys', component: ToysMainComponent },

  { path: 'category/technology', component: TechnologyComponent },
  { path: 'category/flowers', component: FlowersMainComponent },

  { path: 'clothing-shoes', component: ClothingShoesMainComponent },
  { path: 'curtains-mats', component: CurtainsMatsMainComponent },

  { path: 'sewing-fabrics', component: SewingFabricsMainComponent },
  { path: 'flowers-function', component: FlowersFunctionMainComponent },
  { path: 'beads-jewellery', component: BeadsJewelleryMainComponent },
  { path: 'stationery-toys', component: StationeryToysMainComponent },
  { path: 'home-living', component: HomeLivingMainComponent },

  { path: '**', component: SewingFabricsMainComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    WomenMainComponent,
    MenMainComponent,
    ToysMainComponent,
    MyaccountMainComponent,
    ListsQuotesComponent,
    OrdersComponent,
    BasketMainComponent,
    FooterComponent,
    TechnologyComponent,
    FlowersMainComponent,
    HomepageMainComponent,
    HomepageSlideComponent,
    ClothingShoesMainComponent,
    CurtainsMatsMainComponent,
    SewingFabricsMainComponent,
    FlowersFunctionMainComponent,
    BeadsJewelleryMainComponent,
    StationeryToysMainComponent,
    KidsMainComponent,
    CurtainsMainComponent,
    MatsMainComponent,
    SewingMainComponent,
    FabricsMainComponent,
    BeadsMainComponent,
    StationeryMainComponent,
    HomeLivingMainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  // { provide: LocationStrategy, useClass: HashLocationStrategy }
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
