
package dao.impl_BD;

import dao.ComentarioDao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JOptionPane;
import model.Comentario;

/**
 *
 * @author 631510049
 */
public class ComentarioDaoBd implements ComentarioDao {
    private Connection conexao;
    private PreparedStatement comando;

    public Connection conectar(String sql) throws SQLException {
        conexao = ConnectionFactory.getConnection();
        comando = conexao.prepareStatement(sql);
        return conexao;
    }

    public void conectarObtendoId(String sql) throws SQLException {
        conexao = ConnectionFactory.getConnection();
        comando = conexao.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
    }

    public void fecharConexao() {
        try {
            if (comando != null) {
                comando.close();
            }
            if (conexao != null) {
                conexao.close();
            }
        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Erro ao encerrar a conexao");
            throw new BDException(ex);

        }

    }  

    
    @Override
    public void salvar(Comentario comentario) {
        int id = 0;
        try {
            
            String sql = "INSERT INTO comentario (nome,texto) "
                    + "VALUES (?,?)";

            //Foi criado um novo método conectar para obter o id
            conectarObtendoId(sql);
            comando.setString(1, comentario.getNome());
            comando.setString(2, comentario.getTexto());
            comando.executeUpdate();
            //Obtém o resultSet para pegar o id
            ResultSet resultado = comando.getGeneratedKeys();
            if (resultado.next()) {
                //seta o id para o objeto
                id = resultado.getInt(1);
                comentario.setId(id);
            }
            else{
                System.err.println("Erro de Sistema - Nao gerou o id conforme esperado!");
                throw new BDException("Nao gerou o id conforme esperado!");
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao salvar comentário.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }
    }

    @Override
    public void deletar(Comentario comentario) {
        try {
            String sql = "DELETE FROM comentario WHERE id = ?";

            conectar(sql);
            comando.setInt(1, comentario.getId());
            comando.executeUpdate();

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao deletar comentário.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }
    }

    
    
    @Override
    public void atualizar(Comentario comentario) {
        try {
            String sql = "UPDATE comentario SET nome=?, texto=?"
                    + "WHERE id=?";

            conectar(sql);
            comando.setString(1, comentario.getNome());
            comando.setString(2, comentario.getTexto());
            comando.setInt(3, comentario.getId());
            comando.executeUpdate();

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao atualizar comentário.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

    }

    @Override
    public List<Comentario> listar() {
        List<Comentario> listaComentarios = new ArrayList<>();

        String sql = "SELECT id,nome,texto username FROM comentario";

        try {
            conectar(sql);

            ResultSet resultado = comando.executeQuery();

            while (resultado.next()) {
                int id = resultado.getInt("id");
                String nome = resultado.getString("nome");
                String texto = resultado.getString("texto");
                

                Comentario comentario = new Comentario(id, nome, texto);

                listaComentarios.add(comentario);

            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar os comentários.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (listaComentarios);
    }

    @Override
    public Comentario procurarPorId(int id) {
        String sql = "SELECT id,nome,texto FROM comentario WHERE id = ?";

        try {
            conectar(sql);
            comando.setInt(1, id);

            ResultSet resultado = comando.executeQuery();

            if (resultado.next()) {
                String nome = resultado.getString("nome");
                String texto = resultado.getString("texto");
               

                Comentario comentario = new Comentario(id, nome, texto);

                return comentario;
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar o comentário pelo id.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (null);
    }

    @Override
    public void deletar(int id) {
          try {
            String sql = "DELETE FROM comentario WHERE id = ?";
            
            
            conectar(sql);
            comando.setInt(1, id);
            comando.executeUpdate();
            JOptionPane.showMessageDialog(null,"Comentário removido com sucesso.");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null,"Erro ao remover comentário.");
            throw new RuntimeException(ex);
        } finally {
            fecharConexao();
        }

   
    }
    
}
