import { Component, OnInit } from '@angular/core';
import { Contato } from "app/contato";
import { CrudUsuariosService } from "app/crud-usuarios.service";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
   contatos:Contato[]; 
   erro: string; 
 
 
   constructor(private servico: CrudUsuariosService){}     
    
   ngOnInit() { 
      
     this.carregarLista(); 
   } 
 
 
   carregarLista(){ 
       this.servico.getContatos().subscribe( 
         data => this.contatos = data, 
         error => this.erro = error 
       ); 
 
    }
}
