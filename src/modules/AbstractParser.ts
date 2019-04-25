import { ParserCommandConflictError } from '../errors/ParserCommandConflictError';
import { defaultMatchList } from './defaults/DefaultMatchList';
import { defaultTriggerList } from './defaults/DefaultTriggerList';

interface IParseTokenA {
  command: string;
  matchUntil: undefined;
  matchPattern: RegExp;
  seprator: undefined;
}
interface IParseTokenB {
  command: string;
  matchUntil: number;
  matchPattern: undefined;
  seprator: string;
}

function isParseTokenA(token: IParseToken): token is IParseTokenA {
    return token.matchPattern instanceof RegExp;
}
function isParseTokenB(token: IParseToken): token is IParseTokenB {
    return !isParseTokenA(token);
}

export function isParseToken(token: any): token is IParseToken {
  return isParseTokenA(token as IParseToken) || isParseTokenB(token as IParseTokenB);
}

export type IParseToken = IParseTokenA | IParseTokenB;

export class AbstractParser {
  private parseString: string;
  private matchList: IParseToken[];
  private triggerList: string[];
  constructor(parseString: string,
              matchList?: IParseToken[] | undefined | null,
              triggerList?: string[]|undefined|null) {
    this.parseString = parseString;
    if (matchList === undefined || matchList === null) {
      this.matchList = defaultMatchList;
    } else {
      this.matchList = matchList;
    }
    if (triggerList === undefined || triggerList === null) {
        this.triggerList = defaultTriggerList;
      } else {
        this.triggerList = triggerList;
      }

    const cmds: string[] = this.matchList.map((token) => token.command);
    if (cmds.length !== Array.from(new Set(cmds)).length) {
        throw new ParserCommandConflictError();
    }
  }
  public parse(): any[] {
     const trigger = this.triggerList.filter((t) => this.parseString.indexOf(t + ' ') === 0);
    //  console.log(trigger);
     if ( trigger.length !== 0) {
        const commandStartIndex =  this.parseString.indexOf(trigger[0]) + trigger[0].length + 1;
        // console.log(commandStartIndex);
        const cmdString = this.parseString.slice(commandStartIndex);
        // console.log(cmdString);
        const cmd = cmdString.split(' ', 1)[0];
        const match = this.matchList.filter((token) => token.command === cmd);
        if (match.length === 0) {
            return [];
        } else {
            const command: IParseToken = match[0];
            const argStartIndex = cmd.length + 1;
            // console.log(argStartIndex);
            const argString = cmdString.slice(argStartIndex);
            if (isParseTokenA(command)) {
                const matchedTokens = argString.match(command.matchPattern);
                if (matchedTokens != null) {
                    return [command, ...matchedTokens ];
                } else {
                    return [command];
                }
            } else {
                const splitArgString = argString.split(command.seprator);
                // console.log(splitArgString);
                const args = [];
                for (let i = 0; i < command.matchUntil; i++) {
                    args.push(splitArgString[i]);
                }
                for (let i = 0; i < command.matchUntil; i++) {
                    splitArgString.shift();
                }
                return [command, ...args, splitArgString.join(command.seprator)];
            }
        }
     } else {
         return [];
     }
}
}
