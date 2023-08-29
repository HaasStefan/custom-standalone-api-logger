import {
  inject,
  Injectable,
  InjectionToken,
  makeEnvironmentProviders,
  Type,
} from '@angular/core';

export interface LoggerConfig {
  dateFormat: string;
  enableError: boolean;
  enableLog: boolean;
}

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('LOGGER_CONFIG');

@Injectable()
export abstract class Logger {
  protected config = inject(LOGGER_CONFIG);

  abstract log(message: string): void;
  abstract error(message: string): void;
}

@Injectable()
export class ConsoleLogger extends Logger {
  log(message: string): void {
    if (this.config.enableLog) {
      console.log(message);
    }
  }
  error(message: string): void {
    if (this.config.enableError) {
      console.error(message);
    }
  }
}

export function prodvideLogger(customLogger: Type<any>, config: LoggerConfig) {
  return makeEnvironmentProviders([
    {
      provide: Logger,
      useClass: customLogger,
      deps: [
        {
          provide: LOGGER_CONFIG,
          useExisting: config,
        },
      ],
    },
  ]);
}
