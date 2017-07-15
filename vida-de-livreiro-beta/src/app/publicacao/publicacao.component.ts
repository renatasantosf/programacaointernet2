import { Component, OnInit } from '@angular/core';
import { MzBaseModal } from "ng2-materialize/dist";
import { Postagem } from "app/postagem";
import { CrudUsuariosService } from "app/crud-usuarios.service";

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent extends MzBaseModal implements OnInit{
    postagem: Postagem;
    erro: string;


  constructor(private servico:CrudUsuariosService) {
        super();
    }

  ngOnInit() {
    this.postagem = new Postagem();
   
  }


  salvar() {
      if(this.postagem.titulo == null) {
        alert("Título é obrigatório.");
      } else {
          if(this.postagem.texto == null) {
            alert("Texto é obrigatório.");
          } else {
              this.servico.adicionarPostagem(this.postagem).subscribe(
                 parceiro => console.log(this.postagem),
                  error => this.erro = error
              );
              alert("Postagem inserida com sucesso!");
              this.postagem = new Postagem();
          }
      }
  }

 
 

}
