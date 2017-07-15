import { Component, OnInit } from '@angular/core';
import { Parceiro } from "app/parceiro";
import { CrudUsuariosService } from "app/crud-usuarios.service";

@Component({
  selector: 'app-parceiro',
  templateUrl: './parceiro.component.html',
  styleUrls: ['./parceiro.component.css']
})
export class ParceiroComponent implements OnInit {
  parceiros: Parceiro[]; 
  erro: string; 
  
 
   constructor(private servico: CrudUsuariosService){
     
   }     
    
   ngOnInit() { 
      
     this.carregarLista(); 
   } 
 
 
   carregarLista(){ 
       this.servico.getParceiros().subscribe( 
         data => this.parceiros = data, 
         error => this.erro = error 
        ); 
 
   } 

}
