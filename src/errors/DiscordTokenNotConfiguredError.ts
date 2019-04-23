import { BaseError } from './BaseError';

export class DiscordTokenNotConfiguredError extends BaseError {
    public message: string = `
Discord Token not configured in environment.
Please create .env file at the root of the project and specify
your discord secret token as DISCORD_TOKEN=<your discord token>
`;
    constructor() {
        super();
    }
}
