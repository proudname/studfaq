import { HttpException, HttpStatus } from '@nestjs/common';


export class InternalException extends HttpException {
  constructor(data: { message: string, code?: number }, status?: HttpStatus) {
    const response: { ok: 1|0, message: string, code?: number} = {
      message: data.message,
      ok: 0
    }
    if (typeof data.code === 'number') response.code = data.code;
    super(response, status || HttpStatus.INTERNAL_SERVER_ERROR);
  }
}