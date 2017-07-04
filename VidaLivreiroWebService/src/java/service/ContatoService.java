
package service;


import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import model.Contato;


/**
 *
 * @author 631510049
 */
@Stateless
public class ContatoService {
    
    private List<Contato> listaContatos;
    
    public ContatoService() {
        listaContatos = new ArrayList<>();
        
    }
    
    public void inserir(Contato contato) {
        listaContatos.add(contato);
    }
    
    public List<Contato> listar() {
        return listaContatos;
    }
    
    public Contato buscarPorId(int id) {
        for(Contato c:listaContatos) {
            if(c.getId() == id) {
                return new Contato(c.getId(), c.getNome(),c.getSobrenome(), c.getEmail(), c.getTelefone(),c.getMensagem());
            }
        }
        return null;
    }
    
    private int getIndice(int id) {
        for(int i=0;i<listaContatos.size();i++){
            if(listaContatos.get(i).getId() == id) {
                return i;
            }
        }
        return -1;
    }
    
    public void atualizar(Contato contato) {
        listaContatos.set(this.getIndice(contato.getId()), 
            contato);
    }
    
    public void excluir(Contato contato) {
        listaContatos.remove(this.getIndice(contato.getId()));
    }
}
