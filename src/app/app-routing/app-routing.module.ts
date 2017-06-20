import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from "../order/order.component";
import { MenuComponent } from "../menu/menu.component";
import { SalesComponent } from "../sales/sales.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: '',
    redirectTo: '/sales',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

export const routedComponents = [
                                  OrderComponent,
                                  MenuComponent,
                                  SalesComponent,
                                  PageNotFoundComponent
                                ];
