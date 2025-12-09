
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Track } from '../shared/models/track';
import { ItemCard } from '../item-card/item-card';
import { DataService } from '../shared/data';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard, FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit {

  filterText: string = '';
  tracks: Track[] = [];
  filteredTracks: Track[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tracks = this.dataService.getTracks();
    this.filterTracks();
  }

  filterTracks(): void {
    const query = this.filterText.toLowerCase().trim();

    if (!query) {
      this.filteredTracks = this.tracks;
      return;
    }

    this.filteredTracks = this.tracks.filter(track =>
      track.title.toLowerCase().includes(query) ||
      track.artist.toLowerCase().includes(query)
    );
  }

  handleTrackSelection(selectedTrack: Track): void {
    console.log('--- ITEMS LIST COMPONENT: ОБРАНО ТРЕК ---');
    console.log('ID:', selectedTrack.id);
    console.log('Назва:', selectedTrack.title);
    console.log('Об\'єкт треку:', selectedTrack);
    console.log('----------------------------------------');
  }
}
