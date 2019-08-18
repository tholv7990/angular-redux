import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Entity } from '.';
import { loadAllAction, loadAllActionSuccess, loadAllActionFailed } from './customer.actions';

@Injectable()
export class CustomerEffects {

    constructor(
        private http: HttpClient,
        private actions$: Actions) {
    }

    @Effect()
    public loadAll$ = this.actions$
        .pipe(
            ofType(loadAllAction),
            switchMap(action => {
                const res = this.fakeData();
                return  of(loadAllActionSuccess({customers: [...res]}));

                // return this.http.get<Entity[]>(`/someapi`)
                //     .pipe(
                //         map(x => {

                //             return loadAllActionSuccess({ customers: this.fakeData() });

                //         }),
                //         catchError((error) => {
                //             return of(loadAllActionFailed({ message: error }));
                //         })
                //     );
            })
        );


        private fakeData(): Entity[] {
            const customers = [];

            for ( let i = 1; i < 10; i++) {
                const data = {
                    _id: i,
                    name: 'tho_' + i
                };

                customers.push(data);
            }

            return customers;
        }
}



