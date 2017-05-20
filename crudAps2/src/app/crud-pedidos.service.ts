import { Injectable } from '@angular/core';
import { Pedido } from "app/pedido";

@Injectable()
export class CrudPedidosService {
    pedidos: Pedido[] = [];
    autoIncrement:number = 1;


  constructor() { }

  getPedidos() {
    return this.pedidos;
  }
  adicionarPedido(pedido: Pedido) {
      pedido.codigo = this.autoIncrement++;
      this.pedidos.push(pedido);

  }

  removerPedido(pedido: Pedido,index:number) {
      index = this.pedidos.indexOf(pedido); 
      this.pedidos.splice(index, 1); 
  }

}
