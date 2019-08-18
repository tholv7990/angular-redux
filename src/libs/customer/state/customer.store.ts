import { CustomerState } from '.';
import { loadAllActionSuccess, removeCustomer } from './customer.actions';
import { on, createReducer } from '@ngrx/store';


const initialState = {
    customers: []
} as CustomerState;

export const customerReducer = createReducer(initialState,


    on(loadAllActionSuccess, (state: CustomerState, data: any) => {
        return { ...state, customers: data.customers };
    }),
    on(removeCustomer, (state: CustomerState, data: any) => {
        state.customers = state.customers.filter(x => x._id !== data.customer._id);
        return {...state};
    })

);

export function safeCustomerReducer(state, action) {
    return customerReducer(state, action);
}

