export interface Customer {
    _id: string;
    name?: string;
    phone?: string;
    username?: string;
    website?: string;
    email?: string;
}


export enum CustomerActionName {
    LoadAllCustomer = '[Customer] Load All Customer',
    LoadAllCustomerSuccess = '[Customer] Load All Customer Success',
    LoadAllCustomerFailed = '[Customer] Load All Customer Failed'
}

export interface CustomerState {
    customers: Customer[];
    selectedCustomer: Customer;
}
