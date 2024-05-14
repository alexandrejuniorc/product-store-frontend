import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/@types/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditComponent {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productsService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Produto atualizado com sucesso!', 'Fechar');
      this.router.navigate(['/']);
    });
  }
}
