import { createAction, props } from '@ngrx/store';
import { Entity } from '.';

export const loadAllAction = createAction(
    '[Customer] Load All'
);

export const loadAllActionSuccess = createAction(
    '[Customer] Load All Success',
    props<{ customers: Entity[]}>()
);

export const loadAllActionFailed = createAction(
    '[Customer] Load All Failed',
    props<{ message?: string }>()
);
