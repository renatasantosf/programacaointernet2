import { Component, OnInit } from '@angular/core';
import { Pedido } from "app/pedido";
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.css']
})
export class FormPedidosComponent implements OnInit {
   titulo = "Inserir Pedido";
   pedido:Pedido;
   codigo:number;


  constructor(private servico:CrudUsuariosService,
  private router:Router, private rota:ActivatedRoute) { }

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
     this.servico.atualizaPedido(this.codigo, this.pedido);
   }
      this.router.navigate(['/usuario']);

  }

  cancelar() {
    this.router.navigate(['/usuario']);

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
