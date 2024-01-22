export class ModelError extends Error {
  status: number

  constructor({ message, status }: { message: string; status: number }) {
    super(message)
    this.status = status
  }
}
