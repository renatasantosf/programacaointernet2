import { Injectable } from '@angular/core';
import { Usuario } from "app/usuario";
import { Pedido } from "app/pedido";
import { Comentario } from "app/comentario";
import { Contato } from "app/contato";
import { Parceiro } from "app/parceiro";

@Injectable()
export class CrudUsuariosService {
  usuarios:Usuario[] = 
  [
    {codigo:1,nome:"Renata fraga",senha:"123",email:"re"}
  ]
  pedidos: Pedido[] = []
  comentarios:Comentario[] = []
  contatos:Contato[] = []
  parceiros:Parceiro[] = []
  
    
  autoIncrementUsuario: number = 0;
  autoIncrementPedido: number = 0;
 
  autoIncrementContato: number = 0;
  autoIncrementParceiro: number = 0;
  
  usuarioAtivo:number;
  indice:number;

  constructor() { }

  

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



	

	getUsuarioPorCodigo() {
		return(this.usuarios.find(usuario => usuario.codigo == this.indice));
	}
     

}
