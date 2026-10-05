import { Routes } from '@angular/router';
import { PokemonDetail } from './pages/pokemon-detail/pokemon-detail';
import { Error } from './pages/error/error';

export const routes: Routes = [
    {
        path: '',
        component: PokemonDetail
    },
    {
        path: '**',
        component: Error
    }
];
