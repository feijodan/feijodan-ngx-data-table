import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyCurrency'
})
export class EmptyCurrencyPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value || value === 'R$0.00') {
      return '';
    }
    return value;
  }

}
