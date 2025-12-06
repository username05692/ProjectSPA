import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Track } from '../shared/models/track';
import { ItemCard } from '../item-card/item-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard, FormsModule], // FormsModule додано коректно
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {

  filterText: string = '';

  // 🟢 1. ВИПРАВЛЕНО: Масив tracks має бути оголошений першим
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

  filteredTracks: Track[] = this.tracks;

  handleTrackSelection(selectedTrack: Track): void {
    console.log('--- ITEMS LIST COMPONENT: ОБРАНО ТРЕК ---');
    console.log('ID:', selectedTrack.id);
    console.log('Назва:', selectedTrack.title);
    console.log('Об\'єкт треку:', selectedTrack);
    console.log('----------------------------------------');
  }

  // 🟢 3. ДОДАНО: Необхідний метод фільтрації
  filterTracks(): void {
    const query = this.filterText.toLowerCase().trim();

    if (!query) {
      this.filteredTracks = this.tracks;
      return;
    }

    // Фільтруємо за назвою треку або іменем виконавця
    this.filteredTracks = this.tracks.filter(track =>
      track.title.toLowerCase().includes(query) ||
      track.artist.toLowerCase().includes(query)
    );
  }
}
