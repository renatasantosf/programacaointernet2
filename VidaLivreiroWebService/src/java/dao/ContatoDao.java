
package dao;

import java.util.List;
import model.Contato;

/**
 *
 * @author 631510049
 */
public interface ContatoDao {
    public void salvar(Contato contato);
    public void deletar(Contato contato);
    public void atualizar(Contato contato);
    public List<Contato> listar();
    public Contato procurarPorId(int id);
    
}
