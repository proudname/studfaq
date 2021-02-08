import { FailedResponse as FailedResponseType } from '../../types';
import { ApiProperty } from '@nestjs/swagger';
import { EFailedResponseCode } from '../../enums';

export class FailedResponse implements FailedResponseType {
  @ApiProperty({ enum: [EFailedResponseCode.INTERNAL_ERROR, EFailedResponseCode.CONNECTION_ERROR] })
  code: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  ok: 0;
}