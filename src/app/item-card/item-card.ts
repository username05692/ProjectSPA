import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Track } from '../shared/models/track';
import { DurationPipe } from '../shared/pipes/duration-pipe';
import { HoverStyleDirective } from '../shared/directives/hover-style.directive';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    DurationPipe,
    HoverStyleDirective
  ],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  @Input() track!: Track;
}
