import { BaseError } from './BaseError';

export class ParserCommandConflictError extends BaseError {
    public message: string = `
In the command list given to the parser, there are conflicting commands. Please verify`;
    constructor() {
        super();
    }
}
