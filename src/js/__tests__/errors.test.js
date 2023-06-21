import SomeError from '../errors';

test('testing of "someError.massage" parameter', () => {
  const result = new SomeError('invalid-type', 'Character`s type not valid').message;
  expect(result).toBe('Character`s type not valid');
});
