export interface Entity {
    _id: string;
    name?: string;
}


export enum CustomerActionName {
    LoadAllCustomer = '[Customer] Load All Customer',
    LoadAllCustomerSuccess = '[Customer] Load All Customer Success',
    LoadAllCustomerFailed = '[Customer] Load All Customer Failed'
}

export interface CustomerState {
    customers: Entity[];
}
