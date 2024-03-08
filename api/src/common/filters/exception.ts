import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class Exception implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.BAD_REQUEST;
    let message = 'Unexpected error occurred.';
    if (exception.code === '23505') {
      const detailMatch = exception.detail.match(
        /Key \((.*?)\)=\((.*?)\) already exists/,
      );
      if (detailMatch) {
        const [, field] = detailMatch;
        message = JSON.stringify({
          field,
          message: 'Ya existe un usuario con este mismo valor',
        });
      }
    }

    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
