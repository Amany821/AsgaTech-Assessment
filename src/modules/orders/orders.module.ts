import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersListingComponent } from './orders-listing/orders-listing.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
        SharedModule,
        CarouselModule,
        NgbCollapseModule
    ]
})
export class OrdersModule { }
