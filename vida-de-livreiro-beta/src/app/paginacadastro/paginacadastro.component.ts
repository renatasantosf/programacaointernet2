import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/usuario";
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-paginacadastro',
  templateUrl: './paginacadastro.component.html',
  styleUrls: ['./paginacadastro.component.css']
})
export class PaginacadastroComponent implements OnInit {

  usuario:Usuario;
  codigo:number;

  constructor(private servico: CrudUsuariosService,private router: Router) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }


	verificarSenha() {
		if(this.usuario.senhaAux1 == this.usuario.senhaAux2) {
			this.usuario.senha = this.usuario.senhaAux1;
			return true;
		} else {
			return false;
		}
	}

    salvarUsuario() {
		if(this.verificarSenha()) {
			this.servico.adicionarUsuario(this.usuario);
			this.usuario = new Usuario();
			alert("Cadastrado com sucesso!");
			this.router.navigate(['/login']);
		} else {
			alert("Senha incoerente.");
		} 
    }
 

}


