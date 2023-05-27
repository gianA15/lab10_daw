import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PdiComponent } from './pages/pdi/pdi.component';
import { DashboardFormComponent } from './pages/dashboard-form/dashboard-form.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { UsersCrudComponent } from './pages/users-crud/users-crud.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-form', component: DashboardFormComponent },
  /* USUARIOS */
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: EditarProductosComponent },
  /* PDI */
  { path: 'pdi', component: PdiComponent },
  /* USUARIOS CRUD*/
  { path: 'usuarios', component: UsersCrudComponent },
  //{ path: 'usuarios/editar/:id', component: EditUserComponent },
  //{ path: 'usuarios/eliminar/:id', component: DeleteUserComponent },
  /* OTHER */
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
