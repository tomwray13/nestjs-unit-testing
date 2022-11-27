import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [HttpModule],
  providers: [PokemonService],
})
export class PokemonModule {}
