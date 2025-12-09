
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Track } from '../shared/models/track';
import { ItemCard } from '../item-card/item-card';
import { DataService } from '../shared/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCard, FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit, OnDestroy {

  filterText: string = '';
  filteredTracks: Track[] = [];

  private tracksSubscription!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.tracksSubscription = this.dataService.filteredTracks$
      .subscribe(data => {
        this.filteredTracks = data;
      });

    this.dataService.setFilter(this.filterText);
  }

  ngOnDestroy(): void {
    if (this.tracksSubscription) {
      this.tracksSubscription.unsubscribe();
      console.log('Підписка успішно відписана в ngOnDestroy.');
    }
  }
  
  filterTracks(): void {
    this.dataService.setFilter(this.filterText);
  }

  handleTrackSelection(selectedTrack: Track): void {
    console.log('--- ITEMS LIST COMPONENT: ОБРАНО ТРЕК ---');
    console.log('ID:', selectedTrack.id);
    console.log('Назва:', selectedTrack.title);
    console.log('Об\'єкт треку:', selectedTrack);
    console.log('----------------------------------------');
  }
}
