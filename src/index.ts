import { config } from 'dotenv';
import { MemeBot } from './MemeBot';

config();

try {
    const memeBot = new MemeBot(process.env.DISCORD_TOKEN);
    memeBot.run();
} catch (e) {
    console.error(e.message);
}
