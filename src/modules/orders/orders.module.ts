import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrdersListingComponent } from './orders-listing/orders-listing.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
    { path: '', component: OrdersListingComponent },
];

@NgModule({
    declarations: [
        OrdersListingComponent,
        OrderDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        RouterModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class OrdersModule { }
