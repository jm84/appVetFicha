import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteDialogComponent } from '../paciente-dialog/paciente-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'specie',
    'age',
    'genere',
    'race',
    'actions',
  ];
  dataSource = new MatTableDataSource<Paciente>([]);
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // Simulate an API call with a timeout
    setTimeout(() => {
      this.dataSource.data = [
        {
          name: 'John Doe',
          specie: 'Human',
          age: 30,
          genere: 'Male',
          race: 'Caucasian',
        },
        // Add more initial data if needed
      ];
      this.isLoading = false;
      this.dataSource.paginator = this.paginator;
    }, 2000); // Simulate a 2-second delay
  }

  openDialog(action: string, paciente?: Paciente): void {
    const dialogRef = this.dialog.open(PacienteDialogComponent, {
      width: '300px',
      data: { action, paciente },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (action === 'Create') {
          this.dataSource.data.push(result);
        } else if (action === 'Edit') {
          const index = this.dataSource.data.findIndex(
            (p) => p.name === result.name
          );
          if (index !== -1) {
            this.dataSource.data[index] = result;
          }
        }
        this.dataSource.data = [...this.dataSource.data]; // Refresh the table
      }
    });
  }

  openConfirmDialog(paciente: Paciente): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { paciente },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deletePaciente(paciente);
      }
    });
  }

  deletePaciente(paciente: Paciente): void {
    const index = this.dataSource.data.findIndex(
      (p) => p.name === paciente.name
    );
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data]; // Refresh the table
    }
  }
}
