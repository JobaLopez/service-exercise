import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [RouterLink],
  template: `<p>Ups! Something went wrong</p>
              <a class="block w-fit mx-auto mt-5 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-700 text-white" routerLink="">Go back home</a>`,
  styleUrl: './error.css',
})
export class Error {}
