import { SuccessResponse as SuccessResponseType } from '../../types';
import { ApiProperty } from '@nestjs/swagger';


class SourceItem {
  @ApiProperty()
  "req": string;
  @ApiProperty()
  "res": string;
}

class SuccessGetResponseData {
  @ApiProperty()
  "_source": SourceItem
}

export class SuccessGetResponse implements SuccessResponseType {
  @ApiProperty()
  ok: 1;
  @ApiProperty({
    type: [SuccessGetResponseData],
    description: "В _source приходят наиболее подходящие записи, где req - предпологаемый вопрос, res - ответ"
  })
  data: SuccessGetResponseData[]
}