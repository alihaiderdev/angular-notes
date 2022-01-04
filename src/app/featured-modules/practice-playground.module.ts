import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  // exports: [ProductsComponent],
})
export class PracticePlaygroundModule {
  constructor() {
    console.log('Featured module');
  }
}
