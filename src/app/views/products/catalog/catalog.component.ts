
import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../../types/product.type';
import { RequestService } from '../../../services/request.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: ProductType[] = [];

  constructor(private requestServices: RequestService, ) { }

  ngOnInit() {
    this.requestServices.getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }


}


