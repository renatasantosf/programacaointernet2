
package service;

import dao.PostagemDao;
import dao.impl_BD.PostagemDaoBd;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import model.Postagem;

/**
 *
 * @author 631510049
 */

@Stateless
public class PostagemService {
    
    private PostagemDao postagemDao;
    
    public PostagemService() {
        postagemDao = new PostagemDaoBd();
    }
    
    public void inserir(Postagem postagem) {
               
         postagemDao.salvar(postagem);
    }
    
    public List<Postagem> listar() {
        return postagemDao.listar();
    }
    
    public Postagem buscarPorId(int id) {
        return postagemDao.procurarPorId(id);
    }
    
    
    
    public void atualizar(Postagem postagem) {
        postagemDao.atualizar(postagem);
    }
    
    public void excluir(Postagem postagem) {
        postagemDao.deletar(postagem);
    }
}
