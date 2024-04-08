import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { cars } from '../../data/cars';
import { ICar } from '../../models/cars';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CarsComponent, MatListModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent {
  cars: ICar[] = cars;
}
