import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MaterializeModule } from 'ng2-materialize';
import { SlideComponent } from './slide/slide.component';
import { PostagemComponent } from './postagem/postagem.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import {enableProdMode} from '@angular/core';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { PaginaparceirosComponent } from './paginaparceiros/paginaparceiros.component';
import { PaginasobreComponent } from './paginasobre/paginasobre.component';
import { PaginacontatoComponent } from './paginacontato/paginacontato.component';
import { PaginaloginComponent } from './paginalogin/paginalogin.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginacadastroComponent } from './paginacadastro/paginacadastro.component';
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { FormPedidosComponent } from './form-pedidos/form-pedidos.component';
import { TabelaPedidosComponent } from './tabela-pedidos/tabela-pedidos.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ModalCadastroParceirosComponent } from './modal-cadastro-parceiros/modal-cadastro-parceiros.component';
import { SenhaEsquecidaComponent } from './senha-esquecida/senha-esquecida.component';

enableProdMode();

const routes: Routes = [ 
	  { path: '', redirectTo: 'inicial', pathMatch: 'full' },
	  { path:'inicial', component: PaginainicialComponent},
	  { path:'parceiros', component: PaginaparceirosComponent},
	  { path:'contato', component: PaginacontatoComponent},
	  { path:'sobre', component: PaginasobreComponent},
	  { path:'login', component: PaginaloginComponent},
	  { path:'cadastro', component: PaginacadastroComponent},
	  { path:'usuario', component: TabelaPedidosComponent},
	  { path: 'editar-usuario/:cod', component: EditarUsuarioComponent },
	  { path:'form-pedidos', component: FormPedidosComponent},
	  { path:'edicao/:cod', component: FormPedidosComponent},
	  { path:'esqueceu', component: SenhaEsquecidaComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlideComponent,
    PostagemComponent,
    SidebarComponent,
    FooterComponent,
    PaginacaoComponent,
    PaginainicialComponent,
    PaginaparceirosComponent,
    PaginasobreComponent,
    PaginacontatoComponent,
    PaginaloginComponent,
    PaginacadastroComponent,
    TabelaPedidosComponent,
    FormPedidosComponent,
    EditarUsuarioComponent,
    ModalCadastroParceirosComponent,
    SenhaEsquecidaComponent,
  ],
   entryComponents: [ModalCadastroParceirosComponent], 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [CrudUsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
    
  

 }
