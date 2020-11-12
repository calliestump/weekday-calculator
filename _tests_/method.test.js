import dayOfWeek from './../src/method.js'

describe('dayOfWeek', () => {

  let z;
  beforeEach(() => {
    z = "";
  });

  test("should return monday if passed a 1", () => {
    z = dayOfWeek(1);
    expect(z).toEqual("monday");
  });
  test("should return tuesday if passed a 2", () => {
    z = dayOfWeek(2);
    expect(z).toEqual("tuesday");
  });
  test("should return wednesday if passed a 3", () => {
    z = dayOfWeek(3);
    expect(z).toEqual("wednesday");
  });
  test("should return thursday if passed a 4", () => {
    z = dayOfWeek(4);
    expect(z).toEqual("thursday");
  });
  test("should return friday if passed a 5", () => {
    z = dayOfWeek(5);
    expect(z).toEqual("friday");
  });
  test("should return saturday if passed a 6", () => {
    z = dayOfWeek(6);
    expect(z).toEqual("saturday");
  });
  test("should return sunday if passed a 7", () => {
    z = dayOfWeek(7);
    expect(z).toEqual("sunday");
  });
});
