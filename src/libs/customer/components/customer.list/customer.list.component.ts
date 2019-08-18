import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerSelectors } from '../../state/customer.selectors';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { loadAllAction, Customer, removeCustomer, selectedCustomerAction } from '../../state';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'customer-list',
  templateUrl: './customer.list.component.html',
  styleUrls: ['./customer.list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerListComponent implements OnInit {

  constructor(public selectors: CustomerSelectors, private store: Store<any>) {
    this.store.dispatch(loadAllAction());
   }

  ngOnInit() {
    this.selectors
    .customers$
    .pipe(
      tap(x => console.log(x))
    ).subscribe();
  }

  public onRemoveItem(item: Customer) {
    this.store.dispatch(removeCustomer({customer: item}));
  }

  public onSelectCustomer(item: Customer) {
    this.store.dispatch(selectedCustomerAction({customer: item}));
  }

}
