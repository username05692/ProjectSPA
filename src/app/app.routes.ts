import { Routes } from '@angular/router';
import { ItemsList } from './items-list/items-list';
import { ItemDetailsComponent } from './item-details/item-details';

export const routes: Routes = [
  {
    path: 'items',
    component: ItemsList
  },

  {
    path: 'items/:id',
    component: ItemDetailsComponent
  },

  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'items'
  }
];
