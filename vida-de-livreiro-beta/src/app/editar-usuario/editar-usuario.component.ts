import { Component, OnInit } from '@angular/core';
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { Router, ActivatedRoute} from "@angular/router";
import { Usuario } from "app/usuario";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario:Usuario;
  codigo:number;
  
  
  constructor(private servico:CrudUsuariosService,
  private router:Router, private rota:ActivatedRoute) { }
    

  ngOnInit() {
    this.codigo = this.rota.snapshot.params['cod'];

    this.usuario = Object.assign({},
    this.servico.usuarioPorCodigo(this.codigo));

  }


   salvarUsuario() {
   if(isNaN(this.codigo)) {
     this.servico.adicionarUsuario(this.usuario);
     this.usuario = new Usuario();
   } else {
     if(this.verificarSenha()) {
          this.servico.atualizaUsuario(this.codigo, this.usuario);
          alert("Alterado com sucesso!");
          this.router.navigate(['/usuario']);
     } else {
            alert("Senhas incoerentes.");
     }
     
   }
     

  }

  
  verificarSenha() {
    if(this.usuario.senhaAux1 == this.usuario.senhaAux2) {
        this.usuario.senha = this.usuario.senhaAux1;
        return true;
    } else {
        return false;
    }
}

 

 

  

}
