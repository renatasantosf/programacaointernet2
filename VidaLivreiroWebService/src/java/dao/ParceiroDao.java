package dao;

import java.util.List;
import model.Parceiro;

/**
 *
 * @author 631510049
 */
public interface ParceiroDao {
    public void salvar(Parceiro parceiro);
    public void deletar(Parceiro parceiro);
    public void deletar(int id);
    public void atualizar(Parceiro parceiro);
    public List<Parceiro> listar();
    public Parceiro procurarPorId(int id);
    
}
