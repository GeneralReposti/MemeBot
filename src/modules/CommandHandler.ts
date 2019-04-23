import { Client, Message } from 'discord.js';
import { ICommandHandler } from './ICommandHandler';

class CommandHandlerImpl implements ICommandHandler {
    public onReady(client: Client) {
        console.log(`Logged in as ${client.user.tag}`);
    }
    public onMessage(message: Message) {
        if (message.content.indexOf('plz ') === 0) {
            const authorId = message.author.id;
            const response = `Hello <@${authorId}>`;
            message.channel.send(response);
        }
    }
}

export const CommandHandler = new CommandHandlerImpl();
