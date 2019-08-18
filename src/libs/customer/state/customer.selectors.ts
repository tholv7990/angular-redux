import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Entity } from '.';

@Injectable({ providedIn: 'root' })
export class CustomerSelectors {

    public customers$ = this.store.select(x => x.customer.customers as Entity[]);

    constructor(private store: Store<any>) { }
}
