import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../../shared/interfaces/pokemon';

@Service()
export class PokemonDetailService {
    private httpClient = inject(HttpClient);
    
    public getPokemon(name:string): Observable<Pokemon> {
        return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`) as Observable<Pokemon>;
    }
}
