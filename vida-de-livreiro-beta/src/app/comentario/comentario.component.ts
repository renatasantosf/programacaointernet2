import { Component, OnInit } from '@angular/core';
import { Comentario } from "app/comentario";
import { CrudUsuariosService } from "app/crud-usuarios.service";

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit { 
   comentarios: Comentario[]; 
   erro: string; 
 
 
   constructor(private servico: CrudUsuariosService){}     
    
   ngOnInit() { 
      
     this.carregarLista(); 
   } 
 
 
   carregarLista(){ 
       this.servico.getComentarios().subscribe( 
         data => this.comentarios = data, 
         error => this.erro = error 
       ); 
 
 
  } 
 }
 
