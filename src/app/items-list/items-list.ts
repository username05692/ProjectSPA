import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCard } from '../item-card/item-card';
import { DataService } from '../shared/data';
import { Track } from '../shared/models/track';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit {

  tracks$: Observable<Track[]> | undefined;
  private filterSubject = new BehaviorSubject<string>('');

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const allTracks$ = this.dataService.getTracks();
    const filter$ = this.filterSubject.asObservable().pipe(startWith(''));

    this.tracks$ = combineLatest([allTracks$, filter$]).pipe(
      map(([tracks, filterText]) => {
        const lowerFilter = filterText.toLowerCase();
        return tracks.filter(track =>
          track.title.toLowerCase().includes(lowerFilter) ||
          track.artist.toLowerCase().includes(lowerFilter)
        );
      })
    );
  }

  onFilterChange(value: string): void {
    this.filterSubject.next(value);
  }
}
