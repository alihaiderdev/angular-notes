import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  pure: true,
})
export class ReverseStringPipe implements PipeTransform {
  inputString: string;
  transform(value: string, ...args: unknown[]): string {
    this.inputString = value.split('').reverse().join('');
    return this.inputString;
  }
}
