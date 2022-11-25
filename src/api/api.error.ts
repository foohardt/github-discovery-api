export class ApiError extends Error {
  readonly status: number;

  constructor(name: string, status: number, message: string) {
    super();
    (this.name = name),
      (this.status = status),
      (this.message = message),
      Error.captureStackTrace(this, Error);
  }
}
