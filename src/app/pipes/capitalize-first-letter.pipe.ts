import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter',
  pure: true,
  // every pipes by default is pure pipe and set to true
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    // return value.charAt(0).toUpperCase() + value.slice(1);
    return value.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
}
