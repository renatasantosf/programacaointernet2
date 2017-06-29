import { Injectable } from '@angular/core';
import { Comentario } from "app/comentario";

@Injectable()
export class PostagemecomentarioService {
 comentarios:Comentario[] = []
 autoIncrementComentario: number = 0;

  constructor() {


   }

  getComentarios() {
    return this.comentarios;
  }

   adicionarComentario(comentario:Comentario) {
		  comentario.codigo = this.autoIncrementComentario++;
      this.comentarios.push(comentario);
   }

    removerComentario(comentario:Comentario) {
      let indice = this.comentarios.indexOf(comentario, 0);
      if(indice > -1) {
        this.comentarios.splice(indice, 1);
      }
    }

}
