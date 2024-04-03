import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cars } from '../data/cars';
import { ICar } from '../models/cars';
import { CarsComponent } from './cars/cars.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsComponent], // added CarsComponent to use it
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cars-app';
  cars: ICar[] = cars;
}
