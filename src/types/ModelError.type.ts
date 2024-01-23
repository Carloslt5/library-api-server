interface ModelErrorProperties {
  message: string
  status: number
}
export class ModelError extends Error {
  status: number

  constructor({ message, status }: ModelErrorProperties) {
    super(message)
    this.status = status
  }
}
