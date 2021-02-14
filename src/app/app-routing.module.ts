import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductModule } from './product/product.module';

//urlが空の時に、リダイレクトする
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: 'detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
