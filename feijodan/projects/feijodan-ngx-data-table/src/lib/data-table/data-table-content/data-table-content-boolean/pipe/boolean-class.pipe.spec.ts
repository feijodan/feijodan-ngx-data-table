import { BooleanClassPipe } from './boolean-class.pipe';

describe('BooleanClassPipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanClassPipe();
    expect(pipe).toBeTruthy();
  });
});
