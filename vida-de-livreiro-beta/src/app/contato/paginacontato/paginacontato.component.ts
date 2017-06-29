import { Component, OnInit } from '@angular/core';
import { Contato } from "app/contato";
import { CrudUsuariosService } from "app/crud-usuarios.service";

@Component({
  selector: 'app-paginacontato',
  templateUrl: './paginacontato.component.html',
  styleUrls: ['./paginacontato.component.css']
})
export class PaginacontatoComponent implements OnInit {
  contato: Contato;

	constructor(private servico:CrudUsuariosService) { }

	ngOnInit() {
		this.contato = new Contato();
	}

	salvarContato() {
		if((this.contato.email == null || this.contato.telefone == null) && 
			this.contato.mensagem) {
			alert("Preencha ao menos e-mail/telefone e mensagem.");
		} else {
			this.servico.adicionarContato(this.contato);
			alert("Mensagem de " + this.contato.email+" enviada com sucesso!");
			this.contato = new Contato();
		}
	}
	
	
}
