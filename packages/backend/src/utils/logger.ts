import chalk from 'chalk'
import { createLogger, format, transports } from 'winston'

const { combine, timestamp, printf } = format

const logFormat = printf(({ level, message, timestamp }) => {
  let colorizedMessage

  if (level === 'info') {
    colorizedMessage = chalk.green(`[INFO] [${timestamp}] ${message}`)
  } else if (level === 'warn') {
    colorizedMessage = chalk.yellow(`[WARN] [${timestamp}] ${message}`)
  } else if (level === 'error') {
    colorizedMessage = chalk.red(`[ERROR] [${timestamp}] ${message}`)
  } else {
    colorizedMessage = `[${level.toUpperCase()}] [${timestamp}] ${message}`
  }

  return colorizedMessage
})

export const logger = createLogger({
  level: 'info',
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
  transports: [new transports.Console()],
})
