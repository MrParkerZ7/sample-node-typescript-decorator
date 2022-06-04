const LogArgumentsAndReturn = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    try {
      console.log("Log decorator arguments", ...args);
      const result = originalMethod.apply(this, args);
      console.log("Log decorator return", result);
      return result;
    } catch (error) {
      console.error("Log decorator error", error);
      throw error;
    }
  };
  return descriptor;
};

export class ClassLogger {
  static secret: string;
  id: number | undefined;

  @LogArgumentsAndReturn
  sumNumber(a: number, b: number, c: number): number {
    return a + b + c;
  }

  @LogArgumentsAndReturn
  throwError(message: string): number {
    throw "Mock_Error";
  }

  @LogArgumentsAndReturn
  static modifyMessage(message: string) {
    return "Modify::" + message;
  }
}
