package service;
import dao.ComentarioDao;
import dao.impl_BD.ComentarioDaoBd;
import java.util.List;
import javax.ejb.Stateless;
import model.Comentario;

/**
 *
 * @author 631510049
 */
@Stateless
public class ComentarioService {
    
    private ComentarioDao comentarioDao;
    
    public ComentarioService() {
        comentarioDao = new ComentarioDaoBd();
        
    }
    
    public void inserir(Comentario comentario) {
        comentarioDao.salvar(comentario);
    }
    
    public List<Comentario> listar() {
        return comentarioDao.listar();
    }
    
    public Comentario buscarPorId(int id) {
        return comentarioDao.procurarPorId(id);
    }
    
   
    public void atualizar(Comentario comentario) {
        comentarioDao.atualizar(comentario);
    }
    
    public void excluir(Comentario comentario) {
        comentarioDao.deletar(comentario);
    }
}
