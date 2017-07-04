package service;
import dao.ContatoDao;
import dao.impl_BD.ContatoDaoBd;
import java.util.List;
import javax.ejb.Stateless;
import model.Contato;

/**
 *
 * @author 631510049
 */
@Stateless
public class ContatoService {
    
    private ContatoDao contatoDao;  
    
    public ContatoService() {
        contatoDao = new ContatoDaoBd();
        
    }
    
    public void inserir(Contato contato) {
        contatoDao.salvar(contato);
    }
    
    public List<Contato> listar() {
        return contatoDao.listar();
    }
    
    public Contato buscarPorId(int id) {
        return contatoDao.procurarPorId(id);
    }
    
    
    
    public void atualizar(Contato contato) {
        contatoDao.atualizar(contato);
    }
    
    public void excluir(Contato contato) {
        contatoDao.deletar(contato);
    }
}
