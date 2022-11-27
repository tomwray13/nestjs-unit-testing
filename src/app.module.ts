import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [TweetsModule, PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
