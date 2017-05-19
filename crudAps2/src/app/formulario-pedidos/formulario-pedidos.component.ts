import { Component, OnInit } from '@angular/core';
import { Pedido } from "app/pedido";
import { CrudPedidosService } from "app/crud-pedidos.service";

@Component({
  selector: 'app-formulario-pedidos',
  templateUrl: './formulario-pedidos.component.html',
  styleUrls: ['./formulario-pedidos.component.css']
})
export class FormularioPedidosComponent implements OnInit {
  
  titulo = "Cadastro";
  pedido:Pedido;



  constructor(private servico: CrudPedidosService) { }

  ngOnInit() {
    this.pedido = new Pedido();
  }

  salvarPedido() {
    this.servico.adicionarPedido(this.pedido);
    this.pedido = new Pedido();

  }

  cancelar() {
    this.pedido = new Pedido();
  }
  
  editar() {

  }

  remover() {
    
  }
}
