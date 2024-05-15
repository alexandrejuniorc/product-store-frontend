import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Deletar produto</h2>
    <mat-dialog-content>
      Tem certeza que quer deletar esse produto?
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="onNo()">Não</button>
      <button
        mat-raised-button
        color="primary"
        (click)="onYes()"
        cdkFocusInitial
      >
        Sim
      </button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DeleteConfirmationDialog {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }
  onYes() {
    this.matDialogRef.close(true);
  }
}

@Injectable({
  providedIn: 'root',
})
export class DeleteConfirmationDialogService {
  matDialog = inject(MatDialog);

  open(): Observable<Boolean> {
    return this.matDialog.open(DeleteConfirmationDialog).afterClosed();
  }
}
