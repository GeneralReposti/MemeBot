import { Client } from 'discord.js';
import { DiscordTokenNotConfiguredError } from './errors/DiscordTokenNotConfiguredError';
import { CommandHandler } from './modules/CommandHandler';

export class MemeBot {
    public token: string;
    private client: Client;

    constructor(token: string = '') {
        if (token === '') {
            throw new DiscordTokenNotConfiguredError();
        } else {
            this.token = token;
        }
        this.client = new Client();
    }

    public run() {
        this.client.on('ready', () => CommandHandler.onReady(this.client));
        this.client.on('message', CommandHandler.onMessage);
        return this.client.login(this.token);
    }
}
