import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

import {CommonService} from "./services/common.service";
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    OrderComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: "login", component: LoginComponent
    },
      {
        path: "register", component: RegisterComponent,
      },
      { path: "products", component: OrderComponent },
      { path: "cart", component: CartComponent },
    { path: "", component: HomeComponent },])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

