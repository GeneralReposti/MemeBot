import { ParserCommandConflictError } from '../src/errors/ParserCommandConflictError';
import { AbstractParser, IParseToken, isParseToken } from '../src/modules/AbstractParser';

describe('Parser Instance', () => {
    it('should verify repeated commands throw an error', () => {
        const commandList: IParseToken[] = [
            {
                command: 'hello',
                matchPattern: undefined,
                matchUntil: 1,
                seprator: ' '
            },
            {
                command: 'hello',
                matchPattern: undefined,
                matchUntil: 2,
                seprator: ' '
            }
            ];
        expect(() => new AbstractParser('plz hello GeneralReposti', commandList))
        .toThrowError(ParserCommandConflictError);

    });
    it('should trigger with !pls', () => {
        const parser = new AbstractParser('!pls hello general replosti');
        const parsedCommand = parser.parse();
        expect(parsedCommand.length).toBeGreaterThan(0);
    });
    it('should trigger with plz', () => {
        const parser = new AbstractParser('plz hello general replosti');
        const parsedCommand = parser.parse();
        expect(parsedCommand.length).toBeGreaterThan(0);
    });
    it('should be of type IParseToken', () => {
        const parser = new AbstractParser('plz hello general replosti');
        const parsedCommand = parser.parse()[0];
        expect(parsedCommand).toBeDefined();
        expect(isParseToken(parsedCommand)).toEqual(true);
    });
    it('should respond with correctly parsed array#1', () => {
        const parser = new AbstractParser('plz hello general HELLO!');
        const parsedCommand: any[] = parser.parse();
        const cmd = parsedCommand[0];
        const arg = parsedCommand[1];
        const rest = [...parsedCommand];
        rest.shift();
        rest.shift();
        expect(cmd.command).toEqual('hello');
        expect(arg).toEqual('general');
        expect(rest).toEqual(['HELLO!']);

    });
    it('should respond with correctly parsed array#2', () => {
        const parser = new AbstractParser('plz ban reposti 24h because I want to');
        const parsedCommand: any[] = parser.parse();
        const cmd = parsedCommand[0];
        const arg = [parsedCommand[1], parsedCommand[2]];
        const rest = [...parsedCommand];
        rest.shift();
        rest.shift();
        rest.shift();
        expect(cmd.command).toEqual('ban');
        expect(arg).toEqual(['reposti', '24h']);
        expect(rest).toEqual(['because I want to']);

    });
});
