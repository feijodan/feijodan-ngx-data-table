import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanIcon'
})
export class BooleanIconPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'true') {
      return 'check_circle';
    }
    return 'remove_circle';
  }
}
