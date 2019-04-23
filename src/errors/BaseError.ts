export class BaseError {
    constructor(...args: any) {
        Error.apply(this, args);
    }
}