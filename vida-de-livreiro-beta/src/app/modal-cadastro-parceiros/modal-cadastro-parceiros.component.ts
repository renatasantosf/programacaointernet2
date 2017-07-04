import { Component, OnInit } from '@angular/core';
import { MzBaseModal } from "ng2-materialize/dist";
import { Parceiro } from "app/parceiro";
import { CrudUsuariosService } from "app/crud-usuarios.service";


@Component({
  selector: 'app-modal-cadastro-parceiros',
  templateUrl: './modal-cadastro-parceiros.component.html',
  styleUrls: ['./modal-cadastro-parceiros.component.css']
})
export class ModalCadastroParceirosComponent extends MzBaseModal implements OnInit{
    parceiro:Parceiro;


	constructor(private servico:CrudUsuariosService) {
        super();
    }

	ngOnInit() {
		this.parceiro = new Parceiro();   
	}


/*salvarParceiro() {
		if(this.parceiro.email == null) {
			alert("O e-mail é obrigatório.");
		} else {
			if(this.parceiro.urlPagina == null) {
				alert("O URL é obrigatório.");
			} else {
				this.servico.adicionarParceiro(this.parceiro);
				alert("Parceiro "+this.parceiro.nomePagina+" cadastrado com sucesso!");
			}
		}
	}

	
	limpar() {
		this.parceiro = new Parceiro();
	}

 */
}
