import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paciente-dialog',
  templateUrl: './paciente-dialog.component.html',
  styleUrls: ['./paciente-dialog.component.css'],
})
export class PacienteDialogComponent {
  form: FormGroup;
  action: string;
  species: string[] = ['Dog', 'Cat'];
  dogRaces: string[] = ['Labrador', 'Poodle', 'Bulldog'];
  catRaces: string[] = ['Siamese', 'Persian', 'Maine Coon'];
  races: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<PacienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.action = data.action;
    this.form = this.fb.group({
      name: [
        data.paciente ? data.paciente.name : '',
        [Validators.required, Validators.minLength(3)],
      ],
      specie: [data.paciente ? data.paciente.specie : '', Validators.required],
      age: [
        data.paciente ? data.paciente.age : '',
        [Validators.required, Validators.min(0)],
      ],
      genere: [data.paciente ? data.paciente.genere : '', Validators.required],
      race: [data.paciente ? data.paciente.race : '', Validators.required],
    });

    // Load initial races based on specie
    this.loadRaces(this.form.get('specie')!.value);

    // Update race options when specie changes
    this.form.get('specie')!.valueChanges.subscribe((value) => {
      this.loadRaces(value);
      this.form.get('race')?.setValue('');
    });
  }

  loadRaces(specie: string): void {
    if (specie === 'Dog') {
      this.races = this.dogRaces;
    } else if (specie === 'Cat') {
      this.races = this.catRaces;
    } else {
      this.races = [];
    }
  }

  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get name() {
    return this.form.get('name');
  }
  get specie() {
    return this.form.get('specie');
  }
  get age() {
    return this.form.get('age');
  }
  get genere() {
    return this.form.get('genere');
  }
  get race() {
    return this.form.get('race');
  }
}
