import { sayHello } from '#/hello';

describe(sayHello.name, () => {
  test('retuned message contains name', () => {
    const name = 'John Doe';
    const message = sayHello(name);
    expect(message.includes(name)).toBe(true);
  });
});
