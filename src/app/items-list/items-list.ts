
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Track } from '../shared/models/track';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {


  tracks: Track[] = [
    {
      id: 1,
      title: 'Where The Hell Is My Husband',
      artist: 'RAYE',
      genre: 'Alternative R&B',
      duration: 158,
      releaseYear: 2025,
      albumArtUrl: 'assets/ray.png',
      isTop: true
    },
    {
      id: 2,
      title: 'SKINNY',
      artist: 'Billie Eilish',
      genre: 'Pop/Alternative',
      duration: 125,
      releaseYear: 2024,
      albumArtUrl: 'assets/skiny.png',
      isTop: false
    },
    {
      id: 3,
      title: 'boy',
      artist: 'Кажанна',
      genre: 'Pop/Electronic',
      duration: 174,
      releaseYear: 2023,
      albumArtUrl: 'assets/boy1.png',
      isTop: false
    },
    {
      id: 4,
      title: 'Eyes Closed',
      artist: 'Imagine Dragons',
      genre: 'Alternative Rock',
      duration: 200,
      releaseYear: 2024,
      albumArtUrl: 'assets/eyes.png',
      isTop: false
    },
  ];

}
