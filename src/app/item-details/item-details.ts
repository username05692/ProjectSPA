import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../shared/data';
import { Track } from '../shared/models/track';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetailsComponent implements OnInit {

  track: Track | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const idString = params.get('id');
        const id = idString ? +idString : NaN;

        if (id && !isNaN(id)) {
          return this.dataService.getTrackById(id);
        }
        return of(undefined);
      })
    ).subscribe(track => {
      this.track = track;
    });
  }
}
