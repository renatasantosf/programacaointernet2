import { Injectable } from '@angular/core';
import { Parceiro } from "app/parceiro";

@Injectable()
export class ParceirosService {
  parceiros:Parceiro[] = []
  autoIncrementParceiro: number = 0;
  

  constructor() { }

  adicionarParceiro(parceiro:Parceiro) {
    parceiro.codigo = this.autoIncrementParceiro++;
		this.parceiros.push(parceiro);
	}

  getParceiros() {
    return this.parceiros;
  }

   removerParceiro(parceiro:Parceiro) {
    let indice = this.parceiros.indexOf(parceiro, 0);
    if(indice > -1) {
      this.parceiros.splice(indice, 1);
    }
  }
}
