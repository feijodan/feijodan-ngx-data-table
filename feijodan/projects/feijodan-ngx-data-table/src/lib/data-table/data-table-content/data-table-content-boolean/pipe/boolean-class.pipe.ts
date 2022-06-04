import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanClass'
})
export class BooleanClassPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'true') {
      return 'icon-success';
    }
    return 'icon-error';
  }
}
