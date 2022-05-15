function DecorClass(target: Function & typeof ClassBasic) {
  target.prototype.id = 1234;
  target.secret = "Mocking";
}

function DecorFunction() {
  // console.log("DecorFunction(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log("DecorFunction(): called", target, propertyKey, descriptor);
  };
}

@DecorClass
export class ClassBasic {
  static secret: string;
  id: number | undefined;

  @DecorFunction()
  getStatic(): string {
    return ClassBasic.secret;
  }
}
