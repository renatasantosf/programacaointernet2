import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CorpoComponent } from './corpo/corpo.component';
import { TabelaPedidosComponent } from './tabela-pedidos/tabela-pedidos.component';
import { FormularioPedidosComponent } from './formulario-pedidos/formulario-pedidos.component';
import { CrudPedidosService } from "app/crud-pedidos.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CorpoComponent,
    TabelaPedidosComponent,
    FormularioPedidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CrudPedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
