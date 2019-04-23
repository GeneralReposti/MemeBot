import { DiscordTokenNotConfiguredError } from '../src/errors/DiscordTokenNotConfiguredError';
import { MemeBot } from '../src/MemeBot';

describe('MemeBot Instantiation', () => {

    it('should verify if lack of token throws an error', () => {
        expect(() => new MemeBot()).toThrowError(DiscordTokenNotConfiguredError);
    });

    it('should verify if instantiation succeeds when token is configured correctly in the environment', () => {
        const token = 'some random token';
        const memeBot = new MemeBot(token);
        expect(memeBot).not.toBeNull();
    });

    it('should verify if token is configured correctly', () => {
        const token = 'some random token';
        const memeBot = new MemeBot(token);
        expect(memeBot.token).toEqual(token);
    });
});
