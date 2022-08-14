import { UsersService } from './services/users.service';
import { Component } from '@angular/core';
import { User } from './models/user.model';


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
  imagenwidth = 20;
  users: User[] = []

  today = new Date()
  date = new Date(2019,12,1)

constructor(private usersService:UsersService) {}

ngOnInit(): void {
  this.usersService.getAllUsers().subscribe(users =>{
    console.log(users)
    this.users = users
  })
}


  persona1 = {
    nombre: this.nombre,
    edad: this.edad,
    avatar: this.imagen,
    avatarTamano: this.imagenwidth,
  };

  personas2 = [
    {
      nombre: 'Henrry',
      edad: 25,
      avatar: 'https://source.unsplash.com/random',
      avatarTamano: this.imagenwidth,
    },
    {
      nombre: 'Leticia',
      edad: 26,
      avatar: 'https://source.unsplash.com/random',
      avatarTamano: this.imagenwidth,
    },
    {
      nombre: 'Jordy',
      edad: 2,
      avatar: 'https://source.unsplash.com/random',
      avatarTamano: this.imagenwidth,
    },
  ];


  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  aumentarEdad() {
    this.persona1.edad++;
  }

  aumentarImagen() {
    this.imagenwidth = this.imagenwidth * 2;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  cambiNombre(event: Event) {
    const element = event.target as HTMLInputElement;
    this.persona1.nombre = element.value;
  }

  addPerson() {
    let persona2 = {
      nombre: this.nombre,
      edad: this.edad,
      avatar: this.imagen,
      avatarTamano: this.imagenwidth,
    };

    this.personas2.push(persona2);
    this.nombre = '';
    this.edad = 0;
  }

  deletePerson(index: number) {
    this.personas2.splice(index, 1);
  }
}
