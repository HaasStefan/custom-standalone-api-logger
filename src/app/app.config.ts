import { ApplicationConfig } from '@angular/core';
import {
  ConsoleLogger,
  LoggerConfig,
  prodvideLogger,
} from './logger/logger.service';

export const appConfig: ApplicationConfig = {
  providers: [
    prodvideLogger(ConsoleLogger, {
      dateFormat: 'yyyy-mm-dd',
      enableError: true,
      enableLog: true,
    } satisfies LoggerConfig as LoggerConfig),
  ],
};
