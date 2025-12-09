
import { Injectable } from '@angular/core';
import { Track } from './models/track';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private tracks: Track[] = [
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

  constructor() { }
  getTracks(): Track[] {
    return this.tracks;
  }
}
