import { Component, inject } from '@angular/core';
import { PokemonDetailService } from './services/pokemon-detail';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  imports: [TitleCasePipe],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css',
})
export class PokemonDetail {
  private pokemonDetailService = inject(PokemonDetailService);

  public pokemon = toSignal(this.pokemonDetailService.getPokemon('nidoking'));
}
