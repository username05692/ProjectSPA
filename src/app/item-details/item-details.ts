import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DataService } from '../shared/data';
import { Track } from '../shared/models/track';
import { DurationPipe } from '../shared/pipes/duration-pipe';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    DurationPipe
  ],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetailsComponent implements OnInit {

  track$: Observable<Track | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.track$ = this.route.paramMap.pipe(
      switchMap(params => {
        const idString = params.get('id');
        const id = idString ? +idString : NaN;

        if (id && !isNaN(id)) {
          return this.dataService.getTrackById(id);
        }
        return of(undefined);
      })
    );
  }
}
