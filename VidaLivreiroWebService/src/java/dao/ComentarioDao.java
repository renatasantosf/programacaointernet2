
package dao;

import java.util.List;
import model.Comentario;

/**
 *
 * @author 631510049
 */
public interface ComentarioDao {
    public void salvar(Comentario comentario);
    public void deletar(Comentario comentario);
    public void deletar(int id);
    public void atualizar(Comentario comentario);
    public List<Comentario> listar();
    public Comentario procurarPorId(int id);
}
