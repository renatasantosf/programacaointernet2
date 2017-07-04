
package dao;

import java.util.List;
import model.Postagem;

/**
 *
 * @author 631510049
 */
public interface PostagemDao {
    public void salvar(Postagem postagem);
    public void deletar(Postagem postagem);
    public void atualizar(Postagem postagem);
    public List<Postagem> listar();
    public Postagem procurarPorId(int id);
}
