import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyDate'
})
export class EmptyDatePipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value || value === '01/01/1970') {
      return '';
    }
    return value;
  }
}
