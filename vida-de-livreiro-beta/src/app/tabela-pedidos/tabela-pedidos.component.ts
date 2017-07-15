import { Component, OnInit } from '@angular/core';
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Pedido } from "app/pedido";
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from "ng2-materialize/dist";
import { PublicacaoComponent } from "app/publicacao/publicacao.component";
import { Postagem } from "app/postagem";

@Component({
  selector: 'app-tabela-pedidos',
  templateUrl: './tabela-pedidos.component.html',
  styleUrls: ['./tabela-pedidos.component.css']
})
export class TabelaPedidosComponent implements OnInit {
  postagens: Postagem[]; 
  erro: string; 
     
  constructor(private modalService: MzModalService,private router:Router,
    private servico:CrudUsuariosService) {
   
  }

   ngOnInit() { 
      
     this.carregarLista(); 
   } 
 
 
   carregarLista(){ 
       this.servico.getPostagens().subscribe( 
         data => this.postagens = data, 
         error => this.erro = error 
        ); 
 
   } 

public openServiceModal() {
    this.modalService.open(PublicacaoComponent);
  }


}
