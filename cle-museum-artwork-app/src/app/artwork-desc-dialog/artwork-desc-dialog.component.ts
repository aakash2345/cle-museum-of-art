import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ArtworkData } from '../artwork/models/artwork';
@Component({
  selector: 'app-artwork-desc-dialog',
  templateUrl: './artwork-desc-dialog.component.html',
  styleUrls: ['./artwork-desc-dialog.component.scss'],
})
export class ArtworkDescDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ArtworkDescDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data: ArtworkData
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}
