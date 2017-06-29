import { Component, OnInit } from '@angular/core';
import { MzBaseModal } from "ng2-materialize/dist";
import { PostagemecomentarioService } from "app/postagemecomentario.service";

@Component({
  selector: 'app-paineladdpostagem',
  templateUrl: './paineladdpostagem.component.html',
  styleUrls: ['./paineladdpostagem.component.css']
})
export class PaineladdpostagemComponent  extends MzBaseModal implements OnInit{
  // postagem: Postagem;
  constructor(private servico: PostagemecomentarioService) {
     super();
  }

  ngOnInit() {
   // postagem = new Postagem();
  }

  /*salvarPostagem() {
		if(this.postagem.titulo == null) {
			alert("O campo título é de preenchimento obrigatório.");
		} else {
			if(this.postagem.texto == null) {
				alert("O campo texto é de preenchimento obrigatório.");
			} else {
				this.servico.adicionarPostagem(this.postagem);
				alert("Postagem incluída com sucesso! ");
			}
		}
	}*/
}
