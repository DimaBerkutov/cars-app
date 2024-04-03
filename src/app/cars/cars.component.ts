import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICar } from '../../models/cars';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule], // added CommonModule to use *ngFor
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  @Input() cars: ICar[] = [];
}
