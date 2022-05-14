function DecorClass(target: Function & typeof ClassBasic) {
  target.prototype.id = 1234;
  target.secret = "Mocking";
}

@DecorClass
export class ClassBasic {
  static secret: string;
  id: number | undefined;

  getStatic(): string {
    return ClassBasic.secret;
  }
}

function DecorClassInitial(options: {
  id: number;
  secret: string;
}): (target: Function & typeof ClassInitial) => void {
  return (target: Function & typeof ClassInitial) => {
    target.prototype.id = options.id;
    target.secret = options.secret;
  };
}

@DecorClassInitial({ id: 789, secret: "Puck is a demon" })
export class ClassInitial {
  static secret: string;
  id: number | undefined;

  getStatic(): string {
    return ClassBasic.secret;
  }
}
