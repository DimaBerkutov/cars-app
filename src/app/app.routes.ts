import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CarsListComponent } from './cars-list/cars-list.component';

export const routes: Routes = [
  { path: '', component: CarsListComponent, pathMatch: 'full' },
  { path: 'card', component: CardComponent },
];
