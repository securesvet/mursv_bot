import { Command } from "./Command";

export class HelloCommand extends Command {
    constructor() {
        super("hello", "/say_hello", "Just saying hi :)", "Hello");
    }
}