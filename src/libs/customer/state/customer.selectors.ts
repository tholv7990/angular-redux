import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '.';

@Injectable({ providedIn: 'root' })
export class CustomerSelectors {
    constructor(private store: Store<any>) { }

    public customers$ = this.store.select(x => x.customer.customers as Customer[]);
    public selectedCustomer$ = this.store.select(x => x.customer.selectedCustomer as Customer);


}
