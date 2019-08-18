import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent, CustomerDetailsComponent } from './components';
import { StoreModule } from '@ngrx/store';
import { safeCustomerReducer, CustomerEffects } from './state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ CustomerListComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ customer: safeCustomerReducer }, {
      // runtimeChecks: {
      //     strictStateImmutability: true,
      //     strictActionImmutability: true,
      //     strictStateSerializability: true,
      //     strictActionSerializability: true,
      // }
  }),
  EffectsModule.forRoot([CustomerEffects]),
  ],
  exports: [CustomerListComponent, CustomerDetailsComponent],
  providers: [],
})
export class CustomerModule { }
