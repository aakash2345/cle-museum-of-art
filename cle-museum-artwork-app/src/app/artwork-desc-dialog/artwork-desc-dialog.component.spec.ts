import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDescDialogComponent } from './artwork-desc-dialog.component';

describe('ArtworkDescDialogComponent', () => {
  let component: ArtworkDescDialogComponent;
  let fixture: ComponentFixture<ArtworkDescDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkDescDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDescDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
