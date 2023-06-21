export default class SomeError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
}
