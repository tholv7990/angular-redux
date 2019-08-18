import { Component, OnInit, Input } from '@angular/core';
import { Customer, CustomerSelectors } from '../../state';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'customer-details',
  templateUrl: './customer.details.component.html',
  styleUrls: ['./customer.details.component.less']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() public customer: Customer;
  constructor(public selectors: CustomerSelectors) { }

  ngOnInit() {

  }

}
