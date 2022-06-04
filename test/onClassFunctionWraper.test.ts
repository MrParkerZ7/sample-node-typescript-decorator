import { ClassLogger } from "../src/onClassFunctionWraper";

describe("Decorator on Class", () => {
  test("Decorator class", () => {
    const data = new ClassLogger();

    expect(typeof data.sumNumber(1, 2, 3)).toEqual("number");
    expect(data.sumNumber(1, 2, 3)).toEqual(6);

    expect(() => data.throwError("Mock_Message")).toThrow("Mock_Error");
    expect(ClassLogger.modifyMessage("Mock_Message")).toEqual(
      "Modify::Mock_Message"
    );
  });
});
