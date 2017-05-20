import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { TabelaPedidosComponent } from './tabela-pedidos/tabela-pedidos.component';
import { FormularioPedidosComponent } from './formulario-pedidos/formulario-pedidos.component';
import { CrudPedidosService } from "app/crud-pedidos.service";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'lista', pathMatch: 'full' },
  {path: 'lista', component: TabelaPedidosComponent },
  {path: 'edicao/:cod', component: FormularioPedidosComponent },
  { path: 'realizarpedido', component: FormularioPedidosComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabelaPedidosComponent,
    FormularioPedidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudPedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
