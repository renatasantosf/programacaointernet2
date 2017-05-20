import { Component, OnInit } from '@angular/core';
import { Pedido } from "app/pedido";
import { CrudPedidosService } from "app/crud-pedidos.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-formulario-pedidos',
  templateUrl: './formulario-pedidos.component.html',
  styleUrls: ['./formulario-pedidos.component.css']
})
export class FormularioPedidosComponent implements OnInit {
  
  titulo = "Cadastro";
  pedido:Pedido;



  constructor(private servico: CrudPedidosService, private router: Router) { }

  ngOnInit() {
    this.pedido = new Pedido();
  }

  salvarPedido() {
    this.servico.adicionarPedido(this.pedido);
    //this.pedido = new Pedido();
    this.router.navigate(['/lista']);

  }

  cancelar() {
    //this.pedido = new Pedido();
    this.router.navigate(['/lista']);
  }
  
  editar() {

  }

  remover() {
    
  }
}
