import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Customer } from '.';
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
               // const res = this.fakeData();
              //  return  of(loadAllActionSuccess({customers: [...res]}));

                return this.http.get<Customer[]>(`https://jsonplaceholder.typicode.com/users?fbclid=IwAR0Z1erH5CBFZagJS7KGJlpei7YEnrzwkOv8zVFVRFrJoxCyI9ySNB1SoK0`)
                    .pipe(
                        map(x => {
                           // console.log(x);
                            return loadAllActionSuccess({ customers: x });

                        }),
                        catchError((error) => {
                            return of(loadAllActionFailed({ message: error }));
                        })
                    );
            })
        );


        private fakeData(): Customer[] {
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



