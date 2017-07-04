import { Injectable } from '@angular/core';
import { Comentario } from "app/comentario";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/RX'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PostagemecomentarioService {
  comentarios:Comentario[] = []
  urlResource = "http://localhost:8080/VidaLivreiroWebService/webresources/comentario";
 
  constructor(private http: Http) { 

  }


  getComentarios() : Observable<Comentario[]> {
      return this.http.get(this.urlResource)
        .map((res:Response)=>res.json())
        .catch((error:any)=>Observable.throw(error));
   }

   adicionarComentario(comentario) :Observable<Comentario> {
      let bodyString = JSON.stringify(comentario);
      console.log(bodyString);
      let headers = new Headers({'Content-Type':'application/json'})
      let options = new RequestOptions({headers:headers});
      return this.http.post(this.urlResource, bodyString, options)
        .map((res:Response)=>{})
        .catch((error:any)=>Observable.throw(error));
   }

   

}
