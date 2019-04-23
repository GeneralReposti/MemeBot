import { Client, Message } from 'discord.js';

export interface ICommandHandler {
    onReady(client: Client): void;
    onMessage(message: Message): void;
}