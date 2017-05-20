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


  getPedidoPorCodigo(codigo:number) {
      return(this.pedidos.find(pedido => pedido.codigo==codigo));
  }

  removerPedido(pedido:Pedido) {
      let indice = this.pedidos.indexOf(pedido, 0);
      if(indice > -1) {
        this.pedidos.splice(indice,1);
      }
  }
  
  editarPedido(codigo:number, pedido: Pedido) {
      let indice = this.pedidos.indexOf(this.getPedidoPorCodigo(codigo), 0);
      this.pedidos[indice] = pedido;
  }

  


}
