import { Component, OnInit } from '@angular/core';
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-senha-esquecida',
  templateUrl: './senha-esquecida.component.html',
  styleUrls: ['./senha-esquecida.component.css']
})
export class SenhaEsquecidaComponent implements OnInit {

  email:string;


  constructor(private servico: CrudUsuariosService,private router: Router) {
    
 
  }

  ngOnInit() {
  }

  recuperarConta() {
    if(this.servico.gerarSenha(this.email)) {
      this.router.navigate(['/login']);
    } else {
      alert("E-mail não cadastrado.");
    }
  }

}
