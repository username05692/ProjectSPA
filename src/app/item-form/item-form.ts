import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/data';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css'
})
export class ItemForm {
  trackForm: FormGroup;

  constructor(private dataService: DataService, private router: Router) {
    this.trackForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      artist: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      releaseYear: new FormControl(2025, [Validators.required, Validators.min(1900), Validators.max(2025)]),
      duration: new FormControl('', [Validators.required, Validators.min(1)]),
      albumArtUrl: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.trackForm.valid) {
      this.dataService.addTrack(this.trackForm.value).subscribe(() => {
        this.router.navigate(['/items']).then();
      });
    } else {
      this.trackForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/items']).then();
  }
}
