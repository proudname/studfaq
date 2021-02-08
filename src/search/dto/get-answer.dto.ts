import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetAnswerDto {
  @ApiProperty({
    description: 'Вопрос пользователя',
    example: 'Как поступить в ваш ВУЗ?'
  })
  @IsString()
  question: string;
}