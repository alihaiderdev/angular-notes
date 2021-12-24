import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  pure: true,
})
export class SquarePipe implements PipeTransform {
  transform(value: number): number {
    return Math.pow(value, 2);
  }
}
