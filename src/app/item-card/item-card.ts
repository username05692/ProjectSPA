import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Track } from '../shared/models/track';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  @Input() track!: Track;
  @Output() trackSelected = new EventEmitter<Track>();

  onSelect(): void {
    this.trackSelected.emit(this.track);
    console.log('Подія спрацювала для треку:', this.track.title);
  }
}
