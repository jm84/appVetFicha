import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FichaClinica } from '../model/fichaClinica/ficha-clinica.model';

@Component({
  selector: 'app-ficha-clinica-detail',
  templateUrl: './ficha-clinica-detail.component.html',
  styleUrls: ['./ficha-clinica-detail.component.css'],
})
export class FichaClinicaDetailComponent implements OnInit {
  fichaClinica!: FichaClinica;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.loadFichaClinica(id);
    });
  }

  loadFichaClinica(id: string | null): void {
    // Simulate fetching data from a service or API
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

    this.fichaClinica =
      fichaClinicas.find((f) => f.id === id) || ({} as FichaClinica);
  }
}
