import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './feature/products/products.module';
import { PopupService } from './services/popup.service';
import { ProductService } from './services/product.service';
import { RequestService } from './services/request.service';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './feature/order/order.component';
import { MainComponent } from './feature/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ProductsModule,
    NgbModule,
    NgbAccordionModule
  ],
  providers: [
    PopupService,
    ProductService,
    RequestService
  ],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
