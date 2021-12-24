import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
  pure: true,
})
// export class SqrtPipe implements PipeTransform {
//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }
// }
export class SqrtPipe implements PipeTransform {
  transform(value: number): number {
    return Math.sqrt(value);
  }
}
