import { Component, OnInit } from '@angular/core';
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-paginalogin',
  templateUrl: './paginalogin.component.html',
  styleUrls: ['./paginalogin.component.css']
})
export class PaginaloginComponent implements OnInit {

  email:string;
  senha:string;
  invalido:boolean;

  constructor(private servico: CrudUsuariosService,private router: Router) { }

  ngOnInit() {
    
  }
  
	logar(email:string, senha:string) {   
        for(var i =0;i<this.servico.usuarios.length;i++) {
            if(this.servico.usuarios[i].email == email && this.servico.usuarios[i].senha == senha) {
				this.servico.indice = i;
				this.router.navigate(['/usuario']);
            } 
        }
       
    }
 

}
