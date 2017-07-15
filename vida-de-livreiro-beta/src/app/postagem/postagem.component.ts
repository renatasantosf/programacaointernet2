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
   erro: string;
  
  constructor(private servico:CrudUsuariosService, private router: Router,
              private rota:ActivatedRoute) {
    
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
        this.servico.adicionarComentario(this.comentario).subscribe(
          comentario => this.router.navigate(['/inicial']),
          error => this.erro = error
        );
         alert("Comentário inserido com sucesso!");
         this.comentario = new Comentario();
      }
    }
}

}
