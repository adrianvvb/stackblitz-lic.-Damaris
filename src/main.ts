import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Bienvenido al perfil de {{ name }}!</h1>
    <a target="_blank" href="https://www.instagram.com/adrian_vvb/">
      Si quieres saber mas de mi !AQUI¡
    </a>
  `,
})
export class App {
  name = 'Adian Veizaga';
}

bootstrapApplication(App);
