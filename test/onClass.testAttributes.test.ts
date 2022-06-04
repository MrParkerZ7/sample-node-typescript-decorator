import { ClassArrtibutes } from "../src/onClassAttributes";

describe("Decorator on Class", () => {
  test("Decorator class", () => {
    const data = new ClassArrtibutes("Puck");

    expect(typeof data.greet()).toEqual("string");
    expect(data.greet()).toEqual("Hello, Puck");
    expect(data.greeting).toEqual("Puck");
  });
});
