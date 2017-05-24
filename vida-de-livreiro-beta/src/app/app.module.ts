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
import { PaginausuarioComponent } from './paginausuario/paginausuario.component';

enableProdMode();

const routes: Routes = [ 
  { path: '', redirectTo: 'inicial', pathMatch: 'full' },
  { path:'inicial', component: PaginainicialComponent},
  { path:'parceiros', component: PaginaparceirosComponent},
  { path:'contato', component: PaginacontatoComponent},
  { path:'sobre', component: PaginasobreComponent},
  { path:'login', component: PaginaloginComponent},
  { path:'cadastro', component: PaginacadastroComponent},
  { path:'usuario', component: PaginausuarioComponent},


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
    PaginausuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
    
  

 }
