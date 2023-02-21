import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';

import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', loadChildren: './order/order.module.ts#OrderModule'},
  { path: 'order-summary', component: OrderSummaryComponent},
  { path: 'about', loadChildren: './about/about.module.ts#AboutModule' },
  { path: 'restaurant', component: RestaurantsComponent },
  { path: 'restaurant/:id', component: RestaurantDetailComponent,
    children:[
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
