import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [TweetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
