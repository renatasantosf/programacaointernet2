import { Component, OnInit } from '@angular/core';
import { Comentario } from "app/comentario";
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Router, ActivatedRoute } from "@angular/router";
import { PostagemecomentarioService } from "app/postagemecomentario.service";

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {
   comentario:Comentario;
   erro: string;
   indice:number;

	constructor(private servico:PostagemecomentarioService) {
    
	}

	ngOnInit() {
		
	}

	salvarComentario() {
		if(this.comentario.nome != null && this.comentario.texto == null) {
			alert("Preencha o campo comentário.");
		} else {
			if(this.comentario.nome == null && this.comentario.texto == null) {
				alert("Campos vazios");
			} else {
				console.log(this.comentario);
				this.servico.adicionarComentario(this.comentario);
				alert("Cadastrado com sucesso.");
			}
		}
	}
	

}
