// src/app/home/home.ts

import { Component } from '@angular/core';
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [ItemsList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
