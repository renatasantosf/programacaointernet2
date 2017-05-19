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
enableProdMode();


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlideComponent,
    PostagemComponent,
    SidebarComponent,
    FooterComponent,
    PaginacaoComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MaterializeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
    
  

 }
