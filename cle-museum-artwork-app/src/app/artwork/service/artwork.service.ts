// ng
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

// app
import { ArtworkData } from '../models/artwork';

@Injectable()
export class ArtworkDataService {
  constructor(private http: HttpClient) {}
  getArtworksData(): Observable<ArtworkData[]> {
    // cle-museum-artwork-app\src\assets\artwork-json-data\cma_artworks.JSON
    const endpoint = `assets/artwork-json-data/cma_artworks.json`;
    return this.http.get<any>(endpoint).pipe(
      take(1),
      map((results) => results.artworks)
    );
  }
}
