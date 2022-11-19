import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Module({
  providers: [TweetsService],
})
export class TweetsModule {}
