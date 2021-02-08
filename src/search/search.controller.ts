import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, ValidationPipe, Type } from '@nestjs/common';
import { GetAnswerDto } from './dto/get-answer.dto';
import { SearchService } from './search.service';
import { SetAnswerDto } from './dto/set-answer.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FailedResponse } from '../common/swagger/failed-response';
import { SuccessResponse } from '../common/swagger/success-response';
import { SuccessGetResponse } from './swagger/success-get-response';

@Controller('elastic_store')
export class SearchController {

  constructor(private searchService: SearchService) {
  }

  @ApiOperation({
    summary: 'Получение ответа на вопрос'
  })
  @ApiResponse({
    status: 200,
    description: 'Удачный поиск (в ответе может быть 0 записей)',
    type: SuccessGetResponse
  })
  @ApiResponse({
    status: 500,
    description: 'Неудачный поиск (возможно не добавлено ни одной записи)',
    type: FailedResponse
  })
  @Get('get_answer')
  getAnswer(@Query() query: GetAnswerDto) {
    return this.searchService.getAnswersByQuestion(query.question);
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Добавление нового ответа'
  })
  @ApiResponse({
    status: 200,
    description: 'Запись добавлена',
    type: SuccessResponse
  })
  @ApiResponse({
    status: 500,
    description: 'Запись не добавлена',
    type: FailedResponse
  })
  @Post('set_answer')
  setAnswer(@Body(new ValidationPipe()) query: SetAnswerDto) {
    return this.searchService.setAnswer({ req: query.question, res: query.answer });
  }

  @Get('get_all_answers')
  @ApiOperation({
    summary: 'Получение всех ответов'
  })
  @ApiResponse({
    status: 200,
    description: 'Записи получены',
    type: SuccessResponse
  })
  @ApiResponse({
    status: 500,
    description: 'Записи не получены',
    type: FailedResponse
  })
  getAllAnswers() {
    return this.searchService.getAllAnswers();
  }

}
