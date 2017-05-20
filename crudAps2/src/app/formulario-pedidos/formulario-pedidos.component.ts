import { Component, OnInit } from '@angular/core';
import { Pedido } from "app/pedido";
import { CrudPedidosService } from "app/crud-pedidos.service";
import { Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-formulario-pedidos',
  templateUrl: './formulario-pedidos.component.html',
  styleUrls: ['./formulario-pedidos.component.css']
})
export class FormularioPedidosComponent implements OnInit {
  
  titulo = "Cadastro";
  pedido:Pedido;
  codigo:number;


  constructor(private servico: CrudPedidosService, private router: Router,
  private rota:ActivatedRoute) { }

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];

    if(isNaN(this.codigo)) {
      this.pedido = new Pedido();
    } else {
      this.pedido = Object.assign({},
        this.servico.getPedidoPorCodigo(this.codigo));
    }

  }

  salvarPedido() {
    if(isNaN(this.codigo)) {
      this.servico.adicionarPedido(this.pedido);
      this.pedido = new Pedido();
    } else {
      this.servico.editarPedido(this.codigo, this.pedido);
    }
    this.router.navigate(['/lista']);

  }

  cancelar() {
      this.router.navigate(['/lista']);
  }
  

}
