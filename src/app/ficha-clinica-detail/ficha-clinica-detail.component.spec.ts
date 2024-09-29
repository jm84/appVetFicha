import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaClinicaDetailComponent } from './ficha-clinica-detail.component';

describe('FichaClinicaDetailComponent', () => {
  let component: FichaClinicaDetailComponent;
  let fixture: ComponentFixture<FichaClinicaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichaClinicaDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaClinicaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
