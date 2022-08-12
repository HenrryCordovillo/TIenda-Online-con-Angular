import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  btnDisabled = true;
  nombre: string = 'Henrry';
  edad: number = 26;
  imagen = 'https://source.unsplash.com/random';
  persona = {
    nombre: 'henrry',
    edad: 10,
    avatar: 'https://source.unsplash.com/random',
    avatarTamano: 200,
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  aumentarEdad() {
    this.persona.edad++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  cambiNombre(event: Event) {
    const element = event.target as HTMLInputElement;
    this.persona.nombre = element.value;
  
  }
}
