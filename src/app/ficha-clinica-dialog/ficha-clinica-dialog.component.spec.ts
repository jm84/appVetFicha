import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaClinicaDialogComponent } from './ficha-clinica-dialog.component';

describe('FichaClinicaDialogComponent', () => {
  let component: FichaClinicaDialogComponent;
  let fixture: ComponentFixture<FichaClinicaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichaClinicaDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaClinicaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
