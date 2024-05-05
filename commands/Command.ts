import { ICommand } from "../interfaces/ICommand";

export class Command implements ICommand {
    name: string;
    triggerCommand: string;
    description: string;
    reply: string;

    constructor(name: string, triggerCommand: string, description: string, reply: string) {
        this.name = name;
        this.triggerCommand = triggerCommand;
        this.description = description;
        this.reply = reply;
    }
}