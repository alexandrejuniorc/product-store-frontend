import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';

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
    loadComponent: () =>
      import('./features/edit/edit.component').then(
        (module) => module.EditComponent
      ),
  },
];
