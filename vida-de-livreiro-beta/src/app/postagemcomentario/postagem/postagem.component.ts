import { Component, OnInit } from '@angular/core';
import { Comentario } from "app/comentario";
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {
   comentario:Comentario;
  
	constructor(private servico:CrudUsuariosService) {
    
	}

	ngOnInit() {
		this.comentario = new Comentario();
	}

	salvarComentario() {
		if(this.comentario.nome != null && this.comentario.texto == null) {
			alert("Preencha o campo comentário.");
		} else {
			if(this.comentario.nome == null && this.comentario.texto == null) {
				alert("Campos vazios");
			} else {
				this.servico.adicionarComentario(this.comentario);
				alert("Comentário inserido com sucesso!"+this.comentario.nome+" - "+this.comentario.texto);
				this.comentario = new Comentario();
			}
		}
	}
	

}
