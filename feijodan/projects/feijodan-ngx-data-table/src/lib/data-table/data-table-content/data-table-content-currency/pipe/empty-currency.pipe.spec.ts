import { EmptyCurrencyPipe } from './empty-currency.pipe';

describe('EmptyCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new EmptyCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
