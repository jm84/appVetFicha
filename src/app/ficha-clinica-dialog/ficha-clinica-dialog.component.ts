import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FichaClinica } from '../model/fichaClinica/ficha-clinica.model';

@Component({
  selector: 'app-ficha-clinica-dialog',
  templateUrl: './ficha-clinica-dialog.component.html',
  styleUrls: ['./ficha-clinica-dialog.component.css'],
})
export class FichaClinicaDialogComponent {
  form: FormGroup;
  dogRaces: string[] = ['Labrador', 'Poodle', 'Bulldog'];
  catRaces: string[] = ['Siamese', 'Persian', 'Maine Coon'];
  action: string;

  constructor(
    public dialogRef: MatDialogRef<FichaClinicaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.action = data.action;
    const fichaClinica = data.fichaClinica || {};

    this.form = this.fb.group({
      ownerName: [fichaClinica.ownerName || '', Validators.required],
      date: [fichaClinica.date || '', Validators.required],
      address: [fichaClinica.address || '', Validators.required],
      city: [fichaClinica.city || '', Validators.required],
      phone1: [fichaClinica.phone1 || '', Validators.required],
      phone2: [fichaClinica.phone2 || '', Validators.required],
      emergencyContactName: [fichaClinica.emergencyContactName || ''],
      emergencyPhone: [fichaClinica.emergencyPhone || ''],
      email: [fichaClinica.email || ''],
      petName: [fichaClinica.petName || '', Validators.required],
      specie: [fichaClinica.specie || '', Validators.required],
      race: [fichaClinica.race || '', Validators.required],
      color: [fichaClinica.color || '', Validators.required],
      age: [fichaClinica.age || '', [Validators.required, Validators.min(0)]],
      genere: [fichaClinica.genere || '', Validators.required],
      diet: [fichaClinica.diet || ''],
      currentMedication: [fichaClinica.currentMedication || ''],
      reasonForVisit: [fichaClinica.reasonForVisit || '', Validators.required],
    });

    // Update race options when specie changes
    this.form.get('specie')!.valueChanges.subscribe((value) => {
      this.form.get('race')?.setValue('');
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const fichaClinica = {
        id: this.data.fichaClinica
          ? this.data.fichaClinica.id
          : this.generateId(),
        ...this.form.value,
      };
      this.dialogRef.close(fichaClinica);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
