import { Injectable } from '@angular/core';
import { Usuario } from "app/usuario";
import { Pedido } from "app/pedido";
import { Comentario } from "app/comentario";
import { Contato } from "app/contato";
import { Parceiro } from "app/parceiro";
import { Observable } from 'rxjs/RX';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Postagem } from "app/postagem";

@Injectable()
export class CrudUsuariosService {

  urlResourceComentario = "http://localhost:8080/VidaLivreiroWebService/webresources/comentario";
  urlResourceParceiro = "http://localhost:8080/VidaLivreiroWebService/webresources/parceiro";
  urlResourceContato = "http://localhost:8080/VidaLivreiroWebService/webresources/contato";
  urlResourcePostagem = "http://localhost:8080/VidaLivreiroWebService/webresources/postagem";
 
  usuarios: Usuario[] = []
  comentarios:Comentario[] = []
  contatos:Contato[] = []
  parceiros:Parceiro[] = []
  postagens:Postagem[] =  []


  autoIncrementUsuario: number = 0;
  
  
  usuarioAtivo:number;
  indice:number;

  constructor(private http: Http) { }

  


  
 

  getUsuarios() {
    return this.usuarios;
  }

  



 getUsuarioAtivo() {
   return this.usuarioAtivo;
 }

  adicionarPostagem(postagem):Observable<Postagem>{
    let bodyString = JSON.stringify(postagem);
    console.log(bodyString);
    let headers = new Headers({'Content-Type':'application/json'})
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.urlResourcePostagem,
        bodyString, options)
        .map((res:Response)=>{})
        .catch((error:any)=>Observable.throw(error));
    
  }
  
  
  getPostagens() : Observable<Postagem[]>{
    return this.http.get(this.urlResourcePostagem)
      .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error));

  }






 adicionarComentario(comentario):Observable<Comentario>{
    let bodyString = JSON.stringify(comentario);
    console.log(bodyString);
    let headers = new Headers({'Content-Type':'application/json'})
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.urlResourceComentario,
        bodyString, options)
        .map((res:Response)=>{})
        .catch((error:any)=>Observable.throw(error));
    
  }

  getComentarios() : Observable<Comentario[]>{
    return this.http.get(this.urlResourceComentario)
      .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error));

  }

adicionarContato(contato):Observable<Contato>{
    let bodyString = JSON.stringify(contato);
    console.log(bodyString);
    let headers = new Headers({'Content-Type':'application/json'})
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.urlResourceContato,
        bodyString, options)
        .map((res:Response)=>{})
        .catch((error:any)=>Observable.throw(error));
    
  }


getContatos() : Observable<Contato[]>{
    return this.http.get(this.urlResourceContato)
      .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error));

  }

adicionarParceiro(parceiro):Observable<Parceiro>{
    let bodyString = JSON.stringify(parceiro);
    console.log(bodyString);
    let headers = new Headers({'Content-Type':'application/json'})
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.urlResourceParceiro,
        bodyString, options)
        .map((res:Response)=>{})
        .catch((error:any)=>Observable.throw(error));
    
  }

  getParceiros() : Observable<Parceiro[]>{
    return this.http.get(this.urlResourceParceiro)
      .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error));

  }

 atualizaUsuario(codigo:number,usuario:Usuario) {
   let indice = this.usuarios.indexOf(this.usuarioPorCodigo(codigo), 0);
   this.usuarios[indice] = usuario;
 }

usuarioPorCodigo(codigo:number) {
   return(this.usuarios.find(usuario => usuario.codigo == codigo));
}


   adicionarUsuario(usuario:Usuario) {
      usuario.codigo = this.autoIncrementUsuario++;
      this.usuarios.push(usuario);
  }

 


gerarSenha(email:string) {
     for(var i =0;i<this.usuarios.length;i++) {
       if(this.usuarios[i].email == email) {
            var senha = Math.floor(Math.random() * 10000000);
            this.usuarios[i].senha = ""+senha;
            alert("Sua nova senha é: "+senha+" e será enviada a você por e-mail.");
            return true;
       } else {
         return false;
       }
     }
 }

  getUsuarioPorCodigo() {
    return(this.usuarios.find(usuario => usuario.codigo == this.indice));
  }
     


 


}
