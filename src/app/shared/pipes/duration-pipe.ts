import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (value === undefined || isNaN(value)) {
      return '0:00';
    }

    const minutes: number = Math.floor(value / 60);
    const seconds: number = value % 60;
    const paddedSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutes}:${paddedSeconds}`;
  }

}
