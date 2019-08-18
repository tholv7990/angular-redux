import { createAction, props } from '@ngrx/store';
import { Entity } from '.';

export const loadAllAction = createAction(
    '[Customer] Load All Customer'
);

export const loadAllActionSuccess = createAction(
    '[Customer] Load All Customer Success',
    props<{ customers: Entity[]}>()
);

export const loadAllActionFailed = createAction(
    '[Customer] Load All Customer Failed',
    props<{ message?: string }>()
);


export const removeCustomer = createAction(
    '[Customer] Remove Selected Customer',
    props<{customer: Entity}>()
);
