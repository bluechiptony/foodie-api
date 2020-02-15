export class DatabaseError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class RequiredPropertyError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class InvalidDataTypeError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
