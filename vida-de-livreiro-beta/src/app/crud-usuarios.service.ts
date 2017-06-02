import { Injectable } from '@angular/core';
import { Usuario } from "app/usuario";
import { Pedido } from "app/pedido";
import { Comentario } from "app/comentario";
import { Contato } from "app/contato";
import { Parceiro } from "app/parceiro";

@Injectable()
export class CrudUsuariosService {
  usuarios: Usuario[] = []
  pedidos: Pedido[] = []
  comentarios:Comentario[] = []
  contatos:Contato[] = []
  parceiros:Parceiro[] = []


  autoIncrementUsuario: number = 0;
  autoIncrementPedido: number = 0;
  autoIncrementComentario: number = 0;
  autoIncrementContato: number = 0;
  autoIncrementParceiro: number = 0;
  
  usuarioAtivo:number;
  indice:number;

  constructor() { }

  getComentarios() {
    return this.comentarios;
  }

  getContatos() {
    return this.contatos;
  }
  
  getParceiros() {
    return this.parceiros;
  }

  getUsuarios() {
    return this.usuarios;
  }

  getPedidos() {
    return this.pedidos;
  }

 getUsuarioAtivo() {
   return this.usuarioAtivo;
 }

  adicionarPedido(pedido:Pedido) {
    pedido.codigo = this.autoIncrementPedido++;
    pedido.cod_usuario = this.getUsuarioPorCodigo().codigo;
    this.pedidos.push(pedido);
  }

  
  getPedidoPorCodigo(codigo:number) {
    return(this.pedidos.find(pedido => pedido.codigo == codigo));
  }
  
  removerPedido(pedido:Pedido) {
    let indice = this.pedidos.indexOf(pedido, 0);
    if(indice > -1) {
      this.pedidos.splice(indice, 1);
    }
  }


  atualizaPedido(codigo:number,pedido:Pedido) {
    let indice = this.pedidos.indexOf(this.getPedidoPorCodigo(codigo),0);
    this.pedidos[indice] = pedido;
  }


adicionarComentario(comentario:Comentario) {
    comentario.codigo = this.autoIncrementComentario++;
    this.comentarios.push(comentario);
  
}

adicionarContato(contato:Contato) {
    contato.codigo = this.autoIncrementContato++;
    this.contatos.push(contato);
}

adicionarParceiro(parceiro:Parceiro) {
    parceiro.codigo = this.autoIncrementParceiro++;
    this.parceiros.push(parceiro);
}

 atualizaUsuario(codigo:number,usuario:Usuario) {
   let indice = this.usuarios.indexOf(this.usuarioPorCodigo(codigo), 0);
   this.usuarios[indice] = usuario;
 }

usuarioPorCodigo(codigo:number) {
   return(this.usuarios.find(usuario => usuario.codigo == codigo));
}


   adicionarUsuario(usuario:Usuario) {
      usuario.codigo = this.autoIncrementUsuario++;
      this.usuarios.push(usuario);
  }

 


gerarSenha(email:string) {
     for(var i =0;i<this.usuarios.length;i++) {
       if(this.usuarios[i].email == email) {
            var senha = Math.floor(Math.random() * 10000000);
            this.usuarios[i].senha = ""+senha;
            alert("Sua nova senha é: "+senha+" e será enviada a você por e-mail.");
            return true;
       } else {
         return false;
       }
     }
 }

  getUsuarioPorCodigo() {
    return(this.usuarios.find(usuario => usuario.codigo == this.indice));
  }
     


 


}
