import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {
  users: any[] = [];
  newUser: any = {};
  selectedUser: any = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createUser() {
    this.userService.createUser(this.newUser).subscribe(
      (response) => {
        this.getUsers();
        this.newUser = {}; // Limpiar los campos del formulario
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.selectedUser).subscribe(
      (response) => {
        this.getUsers();
        this.selectedUser = {}; // Limpiar los campos del formulario
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(
      (response) => {
        this.getUsers(); // Actualizar la lista de usuarios
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectUser(user: any) {
    this.selectedUser = { ...user }; // Crear una copia del usuario seleccionado para evitar modificarlo directamente en la lista
  }
}
