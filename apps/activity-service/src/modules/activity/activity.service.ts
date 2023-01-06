import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateActivityRequest } from '@shared/dto/activity/create-activity.dto';
import { UpdateActivityRequest } from '@shared/dto/activity/update-activity.dto';
import { Activity } from '@shared/schemas/activity.schema';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(Activity.name)
    private readonly activityModel: Model<Activity>,
  ) {}

  async create(data: CreateActivityRequest): Promise<Activity> {
    const activity = await this.activityModel.create(data);
    return activity;
  }

  async findAllByUser(userId) {
    const activities = await this.activityModel.find({ user: userId });
    return activities;
  }

  async update(data: UpdateActivityRequest): Promise<Activity> {
    const activity = await this.activityModel.findOne({ _id: data.id });

    if (!activity) throw new RpcException('activity does not exist');

    activity.update(data);

    return activity;
  }

  async remove(id: string) {
    const activity = await this.activityModel.findOne({ _id: id });

    if (!activity) throw new RpcException('Activity does not exist');

    await this.activityModel.deleteOne({ _id: id });
  }
}
