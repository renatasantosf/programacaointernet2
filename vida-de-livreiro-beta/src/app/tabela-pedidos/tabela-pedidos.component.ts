import { Component, OnInit } from '@angular/core';
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Pedido } from "app/pedido";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tabela-pedidos',
  templateUrl: './tabela-pedidos.component.html',
  styleUrls: ['./tabela-pedidos.component.css']
})
export class TabelaPedidosComponent implements OnInit {
  titulo = "Listagem de pedidos";
  pedidos:Pedido[]  = [];
  constructor(private servico:CrudUsuariosService, private router:Router){ }

  ngOnInit() {
    this.pedidos = this.servico.getPedidos();
    
  }
  remover(pedido:Pedido) {
    this.servico.removerPedido(pedido);
  }

  sair() {
     this.router.navigate(['/login']);


  }

  getCodigo() {
     return this.servico.getUsuarioPorCodigo().codigo;
  }


  getNome() {
    return this.servico.getUsuarioPorCodigo().nome;
  
  }

  getEmail() {
    return this.servico.getUsuarioPorCodigo().email;
  }

  getSobre() {
    return this.servico.getUsuarioPorCodigo().sobre;
  }

}
