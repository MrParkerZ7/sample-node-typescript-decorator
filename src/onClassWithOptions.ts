function DecorClassInitial(options: {
  id: number;
  secret: string;
}): (target: Function & typeof ClassInitial) => void {
  return (target: Function & typeof ClassInitial) => {
    target.prototype.id = options.id;
    target.secret = options.secret;
  };
}

function DecorFunction(options: { newSecret: string }) {
  console.log("DecorFunction(): init", options);
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("DecorFunction(): called", target, propertyKey, descriptor);
  };
}

@DecorClassInitial({ id: 789, secret: "Puck is a demon" })
export class ClassInitial {
  static secret: string;
  id: number | undefined;

  @DecorFunction({ newSecret: "Puck is a evil message" })
  getStatic(type: "A" | "B" | undefined = undefined): string {
    return ClassInitial.secret;
  }
}
