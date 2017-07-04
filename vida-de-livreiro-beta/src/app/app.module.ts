import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MaterializeModule } from 'ng2-materialize';
import { SlideComponent } from './slide/slide.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import {enableProdMode} from '@angular/core';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { PaginasobreComponent } from './paginasobre/paginasobre.component';
import { PaginaloginComponent } from './paginalogin/paginalogin.component';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { SenhaEsquecidaComponent } from './senha-esquecida/senha-esquecida.component';
import { PainelpublicacoesComponent } from "app/administrador/painelpublicacoes/painelpublicacoes.component";
import { PaginaparceirosComponent } from "app/parceiros/paginaparceiros/paginaparceiros.component";
import { PaginacontatoComponent } from "app/contato/paginacontato/paginacontato.component";
import { PaineladministradorComponent } from "app/administrador/paineladministrador/paineladministrador.component";
import { PainelcomentariosComponent } from "app/administrador/painelcomentarios/painelcomentarios.component";
import { PainelcontatosComponent } from "app/administrador/painelcontatos/painelcontatos.component";
import { PostagemComponent } from "app/postagemcomentario/postagem/postagem.component";
import { ModalCadastroParceirosComponent } from "app/parceiros/modal-cadastro-parceiros/modal-cadastro-parceiros.component";
import { PaineladdpostagemComponent } from "app/administrador/paineladdpostagem/paineladdpostagem.component";
import { AdministradormenuComponent } from "app/administrador/administradormenu/administradormenu.component";
import { PaineleditpostagemComponent } from "app/administrador/paineleditpostagem/paineleditpostagem.component";

enableProdMode();

const routes: Routes = [ 
	  { path: '', redirectTo: 'inicial', pathMatch: 'full' },
	  { path:'inicial', component: PaginainicialComponent},
	  { path:'parceiros', component: PaginaparceirosComponent},
	  { path:'contato', component: PaginacontatoComponent},
	  { path:'sobre', component: PaginasobreComponent},
	  { path:'login', component: PaginaloginComponent},
		{ path:'esqueceu', component: SenhaEsquecidaComponent },
    { path:'usuario', component:PaineladministradorComponent,
        children: [
          { path: 'comentarios', component:PainelcomentariosComponent},
          { path: 'contatos', component:PainelcontatosComponent},
          { path: 'publicacoes', component: PainelpublicacoesComponent, redirectTo:'usuario' }
        ]
    }
  
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
    ModalCadastroParceirosComponent,
    SenhaEsquecidaComponent,
    PaineladministradorComponent,
    PainelcontatosComponent,
    PainelcomentariosComponent,
    PaineladdpostagemComponent,
    PaineleditpostagemComponent,
    AdministradormenuComponent,
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
