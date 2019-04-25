import { IParseToken } from '../AbstractParser';

export const defaultMatchList: IParseToken[] = [
{
    command: 'hello',
    matchPattern: undefined,
    matchUntil: 1,
    seprator: ' '
},
{
    command: 'ban',
    matchPattern: undefined,
    matchUntil: 2,
    seprator: ' '
}
]