import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/@types/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogService } from '../../shared/services/delete-confirmation-dialog.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products: Product[] = [];
  productsService = inject(ProductsService);
  deleteConfirmationDialogService = inject(DeleteConfirmationDialogService);
  router = inject(Router);
  matDialog = inject(MatDialog);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(id: string) {
    this.router.navigate(['/edit-product', id]);
  }

  onDelete(id: string) {
    this.deleteConfirmationDialogService
      .open()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsService.delete(id).subscribe(() => {
          this.productsService.getAll().subscribe((products) => {
            this.products = products;
          });
        });
      });
  }
}
