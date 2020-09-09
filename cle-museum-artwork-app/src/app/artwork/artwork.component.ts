// ng
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

// angular material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

// rxjs
import { finalize, tap } from 'rxjs/operators';

// app
import { ArtworkDataService } from './service/artwork.service';
import { ArtworkDescDialogComponent } from '../artwork-desc-dialog/artwork-desc-dialog.component';
import { ArtworkData } from './models/artwork';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent implements OnInit {
  dataSource: MatTableDataSource<ArtworkData>;
  showColumns = new FormControl();
  isLoading = false;
  columnsTitles: string[] = [
    'artworkid',
    'title',
    'name',
    'accession_number',
    'role',
    'description',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private artworkService: ArtworkDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.artworkService
      .getArtworksData()
      .pipe(
        tap((response: ArtworkData[]) => {
          if (response) {
            this.dataSource = new MatTableDataSource(response);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          }
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  openDialog(dialogData: ArtworkData) {
    this.dialog.open(ArtworkDescDialogComponent, {
      data: {
        accession_number: dialogData.accession_number,
        description: dialogData.description,
        name: dialogData.name,
        role: dialogData.role,
        title: dialogData.title,
        tombstone: dialogData.tombstone,
      },
    });
  }
}
