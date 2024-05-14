import {
  ActivatedRouteSnapshot, RouterStateSnapshot,
  Routes
} from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/products.service';

export const routes: Routes = [
  {
    path: '',
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
    resolve: {
      product: (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) => {
        const productsService = inject(ProductsService)
        return productsService.get(route.paramMap.get('id') as string)
      },
    },
    loadComponent: () =>
      import('./features/edit-product/edit-product.component').then(
        (module) => module.EditComponent
      ),
  },
];
