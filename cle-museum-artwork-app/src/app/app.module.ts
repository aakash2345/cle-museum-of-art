// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// app
import { AppComponent } from './app.component';
import { ArtworkModule } from './artwork/artwork.module';
import { AppRoutingModule } from './app-routing.module';
import { ArtworkDescDialogComponent } from './artwork-desc-dialog/artwork-desc-dialog.component';
@NgModule({
  declarations: [AppComponent, ArtworkDescDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArtworkModule,
    MatButtonModule,
    MatCardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
