import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PdiComponent } from './pages/pdi/pdi.component';
import { DashboardFormComponent } from './pages/dashboard-form/dashboard-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersCrudComponent } from './pages/users-crud/users-crud.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { VerProductoComponent } from './pages/productos/ver-producto/ver-producto.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MainContentComponent,
    FormComponent,
    HomeComponent,
    DashboardComponent,
    PdiComponent,
    DashboardFormComponent,
    UsersCrudComponent,
    LoginComponent,
    CreateUserComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    NavbarComponent,
    VerProductoComponent,
    EditarProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
