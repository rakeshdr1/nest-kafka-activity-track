import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { CONSTANTS } from '@shared/constants';
import { CreateActivityRequest } from '@shared/dto/activity/create-activity.dto';
import { UpdateActivityRequest } from '@shared/dto/activity/update-activity.dto';
import { Activity } from '@shared/schemas/activity.schema';

@Injectable()
export class ActivityService {
  constructor(
    @Inject('Activity-SERVICE')
    private readonly activityService: ClientKafka,
  ) {}

  async findAllByUser(userId: string): Promise<Activity[]> {
    const activities = await firstValueFrom(
      this.activityService.send(
        CONSTANTS.KAFKA_TOPICS.ACTIVITY.FIND_ALL,
        userId,
      ),
    );

    return activities;
  }

  async create(data: CreateActivityRequest): Promise<Activity> {
    const activity = await firstValueFrom(
      this.activityService.send(
        CONSTANTS.KAFKA_TOPICS.ACTIVITY.CREATE,
        JSON.stringify(data),
      ),
    );

    return activity;
  }

  async update(data: UpdateActivityRequest): Promise<Activity> {
    const activity = await firstValueFrom(
      this.activityService.send(
        CONSTANTS.KAFKA_TOPICS.ACTIVITY.UPDATE,
        JSON.stringify(data),
      ),
    );

    return activity;
  }

  async remove(id: string) {
    await firstValueFrom(
      this.activityService.send(CONSTANTS.KAFKA_TOPICS.ACTIVITY.REMOVE, id),
    );
  }
}
