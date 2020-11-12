import dayOfWeek from './../src/method.js'

describe('dayOfWeek', () => {

  test("should return monday if passed a 1", () => {
    let z = dayOfWeek(2);
    expect(z).toEqual("not monday");
  });
});