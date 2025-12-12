
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Track } from '../shared/models/track';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input({ required: true }) track!: Track;
  @Output() trackSelected = new EventEmitter<Track>();

  onSelect(): void {
    this.trackSelected.emit(this.track);
  }
}
