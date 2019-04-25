import { config } from 'dotenv';
import { MemeBot } from './MemeBot';
import { AbstractParser } from './modules/AbstractParser';

config();

try {
    const memeBot = new MemeBot(process.env.DISCORD_TOKEN);
    memeBot.run();
} catch (e) {
    console.error(e.message);
}
