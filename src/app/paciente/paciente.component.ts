import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PacienteDialogComponent } from '../paciente-dialog/paciente-dialog.component';

export interface Paciente {
  name: string;
  specie: string;
  age: number;
  genere: string;
  race: string;
}

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  displayedColumns: string[] = ['name', 'specie', 'age', 'genere', 'race', 'actions'];
  dataSource: Paciente[] = [
    { name: 'John Doe', specie: 'Human', age: 30, genere: 'Male', race: 'Caucasian' },
    // Add more initial data if needed
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(action: string, paciente?: Paciente): void {
    const dialogRef = this.dialog.open(PacienteDialogComponent, {
      width: '300px',
      data: { action, paciente }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'Create') {
          this.dataSource.push(result);
        } else if (action === 'Edit') {
          const index = this.dataSource.findIndex(p => p.name === result.name);
          if (index !== -1) {
            this.dataSource[index] = result;
          }
        }
        this.dataSource = [...this.dataSource]; // Refresh the table
      }
    });
  }
}
