const format = (lvl: string, msg: string) =>
  `[${new Date().toISOString()}] ${lvl}: ${msg}`;

type LogArgs = (string | number | object | Error)[];

export const logger = {
  info: (msg: string, ...args: LogArgs): void =>
    console.log(format("ℹINFO", msg), ...args),

  error: (msg: string, ...args: LogArgs): void =>
    console.error(format("ERREUR", msg), ...args),

  warn: (msg: string, ...args: LogArgs): void =>
    console.warn(format(" ALERTE", msg), ...args),

  debug: (msg: string, ...args: LogArgs): void => {
    if (process.env.NODE_ENV !== "production") {
      console.debug(format("DEBUG", msg), ...args);
    }
  },
};

export default logger;
