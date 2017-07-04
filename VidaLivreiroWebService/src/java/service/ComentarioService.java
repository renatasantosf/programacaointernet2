
package service;


import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import model.Comentario;


/**
 *
 * @author 631510049
 */
@Stateless
public class ComentarioService {
    
    private List<Comentario> listaComentarios;
    
    public ComentarioService() {
        listaComentarios = new ArrayList<>();
        
    }
    
    public void inserir(Comentario comentario) {
        listaComentarios.add(comentario);
    }
    
    public List<Comentario> listar() {
        return listaComentarios;
    }
    
    public Comentario buscarPorId(int id) {
        for(Comentario c:listaComentarios) {
            if(c.getId() == id) {
                return new Comentario(c.getId(),c.getNome(),c.getTexto());
            }
        }
        return null;
    }
    
    private int getIndice(int id) {
        for(int i=0;i<listaComentarios.size();i++){
            if(listaComentarios.get(i).getId() == id) {
                return i;
            }
        }
        return -1;
    }
    
    public void atualizar(Comentario comentario) {
        listaComentarios.set(this.getIndice(comentario.getId()), 
            comentario);
    }
    
    public void excluir(Comentario comentario) {
        listaComentarios.remove(this.getIndice(comentario.getId()));
    }
}
