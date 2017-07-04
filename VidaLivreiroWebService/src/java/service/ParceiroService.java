package service;
import dao.ParceiroDao;
import dao.impl_BD.ParceiroDaoBd;
import java.util.List;
import model.Parceiro;

/**
 *
 * @author 631510049
 */

public class ParceiroService {
     private ParceiroDao parceiroDao;
    
    public ParceiroService() {
        parceiroDao = new ParceiroDaoBd();
        
    }
    
    public void inserir(Parceiro parceiro) {
        parceiroDao.salvar(parceiro);
    }
    
    public List<Parceiro> listar() {
        return parceiroDao.listar();
    }
    
    public Parceiro buscarPorId(int id) {
       return parceiroDao.procurarPorId(id);
    }
    
    
    public void atualizar(Parceiro parceiro) {
        parceiroDao.atualizar(parceiro);
    }
    
    public void excluir(Parceiro parceiro) {
       parceiroDao.deletar(parceiro);
    }
}
