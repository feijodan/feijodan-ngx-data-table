import { EmptyDatePipe } from './empty-date.pipe';

describe('EmptyDatePipe', () => {
  it('create an instance', () => {
    const pipe = new EmptyDatePipe();
    expect(pipe).toBeTruthy();
  });
});
