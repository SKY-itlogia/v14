import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './views/products/products.module';
import { PopupService } from './services/popup.service';
import { ProductService } from './services/product.service';
import { RequestService } from './services/request.service';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from './views/main/main.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from './views/order/order.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ProductsModule,
    NgbModule,
    NgbAccordionModule,
    MainModule,
    SharedModule,
    HttpClientModule,
    OrderModule,
  ],
  providers: [
    PopupService,
    ProductService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
