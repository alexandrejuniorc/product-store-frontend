import { Routes } from '@angular/router';
import { ListComponent } from './features/list-products/list-products.component';
import { getProducts } from './shared/resolvers/get-products.resolver';
import { getProduct } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: { products: getProducts },
    component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./features/create-product/create-product.component').then(
        (module) => module.CreateProductComponent
      ),
  },
  {
    path: 'edit-product/:id',
    resolve: { product: getProduct },
    loadComponent: () =>
      import('./features/edit-product/edit-product.component').then(
        (module) => module.EditComponent
      ),
  },
];
