import { CustomerState } from '.';
import { loadAllActionSuccess } from './customer.actions';
import { on, createReducer } from '@ngrx/store';


const initialState = {
    customers: []
} as CustomerState;

export const customerReducer = createReducer(initialState,


    on(loadAllActionSuccess, (state: CustomerState, data: any) => {
        console.log('store',data)
        return { ...state, customers: data.customers };
    })

);

export function safeCustomerReducer(state, action) {
    return customerReducer(state, action);
}

