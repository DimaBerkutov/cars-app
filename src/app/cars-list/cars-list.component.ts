import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatListModule } from '@angular/material/list';

import { cars } from '../../data/cars';
import { ResizeDirective } from '../../directives/resizer.directives';
import { ICar } from '../../models/cars';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule, CarsComponent, MatListModule, ResizeDirective],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent {
  cars: ICar[] = cars;
  car: ICar = cars[1];

  onCarClick(car: ICar) {
    this.car = car;
  }
}
