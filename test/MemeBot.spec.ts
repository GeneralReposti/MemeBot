import { MemeBot } from '../src/MemeBot';

describe('MemeBot Instantiation', () => {
    it('should verify if MemeBot is instantiable', () => {
        const memeBot = new MemeBot();
        expect(memeBot).not.toBeNull();
    });

    it('should verify if default MemeBot name is setup correctly', () => {
        const expectedMemeBotName = 'MemeBot';
        const memeBot = new MemeBot();

        expect(memeBot.name).toEqual(expectedMemeBotName);
    });

    it('should verify if custom MemeBot name is setup correctly', () => {
        const expectedMemeBotName = 'TrollBot';
        const memeBot = new MemeBot(expectedMemeBotName);

        expect(memeBot.name).toEqual(expectedMemeBotName);
    });
});