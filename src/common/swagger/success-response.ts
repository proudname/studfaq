import { SuccessResponse as SuccessResponseType } from '../../types';
import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponse implements SuccessResponseType {
  @ApiProperty()
  ok: 1;
}