import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { OrderType } from '../../types/order.type';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup
  processing: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private requestServices: RequestService, private fb: FormBuilder) { }

  formValues = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: '',
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.product = params['product']
      }
    })
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Zа-яА-Я]+')]],
      last_name: ['', [Validators.required, Validators.pattern('[a-zA-Zа-яА-Я]+')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9+]{12}')]],
      country: [''],
      zip: [''],
      product: [this.formValues.product],
      address: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я0-9\s/-]*$')]],
      comment: [''],
    });
  }

  onSubmit() { 
    if (this.orderForm.invalid) {
      return;
    }
    const orderData = this.orderForm.value;
    this.requestServices.form(orderData)
      .subscribe(
        (response: OrderType) => {
          if (response.success === 1) {
            this.processing = true;
          } else {
            alert('Произошла ошибка. Попробуйте еще раз.');
          }
        }
      );

  }
}