
import { Component, Input } from '@angular/core';
import { Track } from '../shared/models/track';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  @Input() track!: Track;
}
