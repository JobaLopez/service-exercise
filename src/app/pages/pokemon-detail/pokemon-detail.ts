import { Component, inject, signal } from '@angular/core';
import { PokemonDetailService } from './services/pokemon-detail';
import { TitleCasePipe } from '@angular/common';
import { form, FormField, submit } from '@angular/forms/signals';
import { Pokemon } from '../../shared/interfaces/pokemon';
import { firstValueFrom } from 'rxjs';

interface PokemonSearch {
  searchTerm: string;
}

@Component({
  selector: 'app-pokemon-detail',
  imports: [TitleCasePipe, FormField],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css',
})
export class PokemonDetail {
  private pokemonDetailService = inject(PokemonDetailService);
  pokemonSearchModel = signal<PokemonSearch>({ searchTerm: 'nidorino' });
  pokemonSearchForm = form(this.pokemonSearchModel);

  public pokemon = signal<Pokemon | undefined>(undefined);
  public showError = signal<boolean>(false);

  constructor() {
    this.onSubmit();
  }

  onSubmit(): void {
    submit(this.pokemonSearchForm, async (): Promise<void> => {
      const term = this.pokemonSearchForm.searchTerm().value();
      try {
        const result = await firstValueFrom(this.pokemonDetailService.getPokemon(term));
        this.pokemon.set(result);
        this.showError.set(false)
      } catch (error) {
        this.showError.set(true);
      }
    });
  }
}
