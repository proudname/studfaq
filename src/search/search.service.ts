import { HttpStatus, Injectable } from '@nestjs/common';
import { elasticClient } from '../common/api/elastic.api';
import { InternalException } from '../common/errors/internal.exception';
import { ExtraLogger } from '@rasp/core';

@Injectable()
export class SearchService {

  private logger = new ExtraLogger();

  async getAnswersByQuestion(question: string) {

    try {
      const searchRes = await elasticClient.search({
        index: 'studfaq',
        q: question,
        size: 3
      });

      if (searchRes.statusCode !== 200) {
        throw new InternalException({
          message: 'External resource is not available'
        }, HttpStatus.BAD_REQUEST)
      }

      return {
       ok: 1,
       data: searchRes.body.hits.hits
      };
    } catch (e) {
      this.logger.detailErr('Search error', e);
      throw new InternalException({
        message: 'Search error'
      }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async setAnswer(data: { req: string, res: string} ) {
    try {
      await elasticClient.index({
        index: 'studfaq',
        body: data
      })
      await elasticClient.indices.refresh({ index: 'studfaq' })
      return {
        ok: 1
      }
    } catch (e) {
      this.logger.detailErr('Index error', e);
      throw new InternalException({
        message: 'Index error'
      }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async getAllAnswers() {
    try {
      const data = await elasticClient.sql.query({
        body: {
          query: "SELECT * FROM \"studfaq\""
        }
      })
      return {
        ok: 1,
        data: data.body.rows
      };
    } catch (e) {
      throw new InternalException({
        message: 'Get all error'
      }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}
