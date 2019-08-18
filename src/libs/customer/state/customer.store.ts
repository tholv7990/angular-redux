import { CustomerState } from '.';
import { loadAllActionSuccess, removeCustomer, selectedCustomerAction } from './customer.actions';
import { on, createReducer } from '@ngrx/store';


const initialState = {
    customers: [],
    selectedCustomer: null
} as CustomerState;

export const customerReducer = createReducer(initialState,


    on(loadAllActionSuccess, (state: CustomerState, data: any) => {
        return { ...state, customers: data.customers };
    }),
    on(removeCustomer, (state: CustomerState, data: any) => {
        state.customers = state.customers.filter(x => x.name !== data.customer.name);
        return {...state};
    }),
    on(selectedCustomerAction, (state: CustomerState, data: any) => {
        return {...state, selectedCustomer: data.selectedCustomer};
    }),

);

export function safeCustomerReducer(state, action) {
    return customerReducer(state, action);
}

