import { Controller, Get } from '@nestjs/common';

import { CONSTANTS } from '@shared/constants';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get()
  getHello(): string {
    console.log(CONSTANTS.KAFKA_TOPICS.ACTIVITY.CREATE);
    return this.apiGatewayService.getHello();
  }
}
