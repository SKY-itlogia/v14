import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { ProductType } from '../../../types/product.type';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product!: ProductType
  constructor(private activatedRoute: ActivatedRoute, private requestServices: RequestService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {


        this.requestServices.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data
            }
          }
          )
      }
    })
  }

  addToInput(title: string): void {
    this.productService.product = title
    this.router.navigate(['/order'], { queryParams: { product: title } })
  }

}
