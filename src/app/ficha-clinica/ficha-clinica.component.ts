import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FichaClinicaDialogComponent } from '../ficha-clinica-dialog/ficha-clinica-dialog.component';
import { FichaClinica } from '../model/fichaClinica/ficha-clinica.model';

@Component({
  selector: 'app-ficha-clinica',
  templateUrl: './ficha-clinica.component.html',
  styleUrls: ['./ficha-clinica.component.css'],
})
export class FichaClinicaComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'ownerName',
    'petName',
    'specie',
    'race',
    'actions',
  ];
  dataSource = new MatTableDataSource<FichaClinica>([]);

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.loadFichaClinicas();
  }

  loadFichaClinicas(): void {
    // Simulate loading data from an API or service
    const fichaClinicas: FichaClinica[] = [
      {
        id: '1',
        ownerName: 'John Doe',
        date: '2023-10-01',
        address: '123 Main St',
        city: 'Anytown',
        phone1: '555-1234',
        phone2: '555-5678',
        emergencyContactName: 'Jane Doe',
        emergencyPhone: '555-8765',
        email: 'john.doe@example.com',
        petName: 'Rex',
        specie: 'dog',
        race: 'Labrador',
        color: 'Black',
        age: 5,
        genere: 'male',
        diet: 'Dry food',
        currentMedication: 'None',
        reasonForVisit: 'Regular check-up',
      },
      // Add more initial data if needed
    ];
    this.dataSource.data = fichaClinicas;
  }

  openDialog(action: string, fichaClinica?: FichaClinica): void {
    const dialogRef = this.dialog.open(FichaClinicaDialogComponent, {
      width: '800px',
      data: { action, fichaClinica },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (action === 'Create') {
          this.dataSource.data.push(result);
        } else if (action === 'Edit') {
          const index = this.dataSource.data.findIndex(
            (f) => f.id === result.id
          );
          if (index !== -1) {
            this.dataSource.data[index] = result;
          }
        }
        this.dataSource.data = [...this.dataSource.data]; // Refresh the table
      }
    });
  }

  viewFichaClinica(fichaClinica: FichaClinica): void {
    this.router.navigate(['/ficha-clinica', fichaClinica.id]);
  }
}
