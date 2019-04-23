export class MemeBot {
    public name: string;

    constructor(name: string = 'MemeBot') {
        this.name = name;
    }

    public run() {
        return `${this.name} started`;
    }
}