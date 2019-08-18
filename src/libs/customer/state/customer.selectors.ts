import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '.';

@Injectable({ providedIn: 'root' })
export class CustomerSelectors {

    public customers$ = this.store.select(x => x.customer.customers as Customer[]);

    constructor(private store: Store<any>) { }
}
