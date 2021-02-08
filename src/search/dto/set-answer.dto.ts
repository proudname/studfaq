import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SetAnswerDto {
  @ApiProperty({
    description: 'Предположительный вопрос'
  })
  @IsString()
  question: string;
  @ApiProperty({
    description: 'Предположительный ответ'
  })
  @IsString()
  answer: string
}