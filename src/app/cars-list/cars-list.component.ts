import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatListModule } from '@angular/material/list';

import { cars } from '../../data/cars';
import { ResizeDirective } from '../../directives/resizer.directives';
import { ICar } from '../../models/cars';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [
    CommonModule,
    CarsComponent,
    MatListModule,
    ResizeDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent {
  cars: ICar[] = cars;
  car: ICar = cars[1];

  carForm = new FormGroup({
    name: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    discription: new FormControl('', Validators.required),
  });

  onFormDataSave() {
    if (this.carForm.valid) {
      console.log('qqq', this.carForm.value);

      // this.cars = cars.push({
      //   id: cars.length,
      //   ...this.carForm.value,
      // });
    }
  }

  onCarClick(car: ICar) {
    this.car = car;
  }
}
