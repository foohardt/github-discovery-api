export class ApiError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super();
    (this.status = status), (this.message = message);
    Error.captureStackTrace(this, Error);
  }
}
