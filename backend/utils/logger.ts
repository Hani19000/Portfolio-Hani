const format = (lvl: string, msg: string) => 
  `[${new Date().toISOString()}] ${lvl}: ${msg}`;

export const logger = {
  info: (msg: string, ...args: any[]): void => console.log(format('ℹINFO', msg), ...args),
  error: (msg: string, ...args: any[]): void => console.error(format('ERREUR', msg), ...args),
  warn: (msg: string, ...args: any[]): void => console.warn(format(' ALERTE', msg), ...args),
  debug: (msg: string, ...args: any[]): void => {
    if (process.env.NODE_ENV !== 'production') console.debug(format('DEBUG', msg), ...args);
  }
};