import { Component, OnInit } from '@angular/core';
import { Pedido } from "app/pedido";
import { CrudPedidosService } from "app/crud-pedidos.service";

@Component({
  selector: 'app-tabela-pedidos',
  templateUrl: './tabela-pedidos.component.html',
  styleUrls: ['./tabela-pedidos.component.css']
})
export class TabelaPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  titulo = "Pedidos";
  constructor(private servico: CrudPedidosService) { }

  ngOnInit() {
    this.pedidos = this.servico.getPedidos();

  }
  remover(pedido: Pedido,index:number) {
      this.servico.removerPedido(pedido,index);
  }

}
