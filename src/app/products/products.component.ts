import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @HostBinding('class') public classes: string = 'd-flex flex-column h-100 overflow-hidden';
  constructor() { }

  ngOnInit(): void {
  }

}
