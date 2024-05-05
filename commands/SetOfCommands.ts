import { Command } from "./Command";
import { HelloCommand } from "./HelloCommand"

let hello = new HelloCommand();

export const SetOfCommands: Command[] = [hello]