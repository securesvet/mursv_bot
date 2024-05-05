// Имплементация для телеграма

import { Bot, GrammyError, HttpError } from 'grammy'
import { config as dotenvConfig} from 'dotenv'
import { SetOfCommands } from './commands/SetOfCommands';
// Now we are able to use BOT_API_KEY
dotenvConfig()

const bot = new Bot(process.env.BOT_API_KEY!)

// Устанавливаю команды

let commandsObject: {command: string, description: string}[] = []

SetOfCommands.map((command) => {
    commandsObject.push({
        command: command.name,
        description: command.description
    })
})

bot.api.setMyCommands(commandsObject)



bot.command(['say_hello', 'hello', 'say_hi'], async (ctx) => {
    await ctx.reply('Hello!')
})

bot.command('start', async (ctx) => {
    await ctx.reply('Привет, я бот!')
})

bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}`)
    const e = err.error;

    if (e instanceof GrammyError) {
        console.error("Error in request:", e.description);
    }
    else if (e instanceof HttpError) {
        console.error("Could not contact Telegram:", e);
    } else {
        console.error("Unknown error:", e);
    }
})

bot.start()