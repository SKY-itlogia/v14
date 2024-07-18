import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
