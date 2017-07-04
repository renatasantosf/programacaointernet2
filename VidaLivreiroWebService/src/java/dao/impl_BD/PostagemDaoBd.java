
package dao.impl_BD;

import dao.PostagemDao;
import dao.UsuarioDao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JOptionPane;
import model.Postagem;

/**
 *
 * @author 631510049
 */
public class PostagemDaoBd implements PostagemDao {
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
    public void salvar(Postagem postagem) {
        UsuarioDao usuarioDao = new UsuarioDaoBd();
        
        int id = 0;
        try {
            
            String sql = "INSERT INTO postagem (titulo,texto,dtpostagem,usuario_email) "
                    + "VALUES (?,?,?,?)";

            //Foi criado um novo método conectar para obter o id
            conectarObtendoId(sql);
            comando.setString(1, postagem.getTitulo());
            comando.setString(2, postagem.getTexto());
            comando.setDate(3, java.sql.Date.valueOf(LocalDate.now()));
            comando.setString(4 , usuarioDao.procurarPorEmail(postagem.getUsuario().getEmail()));
            comando.executeUpdate();
            //Obtém o resultSet para pegar o id
            ResultSet resultado = comando.getGeneratedKeys();
            if (resultado.next()) {
                //seta o id para o objeto
                id = resultado.getInt(1);
                postagem.setId(id);
            }
            else{
                System.err.println("Erro de Sistema - Nao gerou o id conforme esperado!");
                throw new BDException("Nao gerou o id conforme esperado!");
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao salvar postagem.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }
    }

    @Override
    public void deletar(Postagem postagem) {
        try {
            String sql = "DELETE FROM postagem WHERE id = ?";

            conectar(sql);
            comando.setInt(1, postagem.getId());
            comando.executeUpdate();

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao deletar postagem.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }
    }

    
    
    @Override
    public void atualizar(Postagem postagem) {
        UsuarioDaoBd usuarioDao = new UsuarioDaoBd();
        try {
            String sql = "UPDATE postagem SET titulo=?, texto=?, dtPostagem=?, usuario_email=?"
                    + "WHERE id=?";

            conectar(sql);
            comando.setString(1, postagem.getTitulo());
            comando.setString(2, postagem.getTexto());
            comando.setDate(3, java.sql.Date.valueOf(LocalDate.now()));
            comando.setString(4, usuarioDao.procurarPorEmail(postagem.getUsuario().getEmail()));
            comando.setInt(4, postagem.getId());
            comando.executeUpdate();

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao atualizar postagem.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

    }

    @Override
    public List<Postagem> listar() {
        List<Postagem> listaPostagens = new ArrayList<>();
        UsuarioDaoBd usuarioDao = new UsuarioDaoBd();

        String sql = "SELECT id,titulo,texto,dtpostagem FROM postagem";
        
        try {
            conectar(sql);

            ResultSet resultado = comando.executeQuery();

            while (resultado.next()) {
                int id = resultado.getInt("id");
                String titulo = resultado.getString("titulo");
                String texto = resultado.getString("texto");
                LocalDate dtPostagem = resultado.getDate("dtpostagem").toLocalDate();
                String email = resultado.getString("usuario_email");
                
                Postagem postagem = new Postagem(id, titulo, texto, dtPostagem,
                        usuarioDao.retornarUsuarioPorEmail(email));

                listaPostagens.add(postagem);

            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar postagens.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (listaPostagens);
    }

    @Override
    public Postagem procurarPorId(int id) {
        UsuarioDaoBd usuarioDao = new UsuarioDaoBd();
        
        String sql = "SELECT id,titulo,texto,dtpostagem,usuario_email FROM postagem WHERE id = ?";

        try {
            conectar(sql);
            comando.setInt(1, id);

            ResultSet resultado = comando.executeQuery();

            if (resultado.next()) {
                String titulo = resultado.getString("titulo");
                String texto = resultado.getString("texto");
                LocalDate dtPostagem = resultado.getDate("dtpostagem").toLocalDate();
                String email = resultado.getString("usuario_email");
                
                Postagem postagem = new Postagem(id, titulo, texto, dtPostagem,
                        usuarioDao.retornarUsuarioPorEmail(email));
                

                return postagem;
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar postagem pelo id.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (null);
    }

    @Override
    public void deletar(int id) {
          try {
            String sql = "DELETE FROM postagem WHERE id = ?";
            
            
            conectar(sql);
            comando.setInt(1, id);
            comando.executeUpdate();
            JOptionPane.showMessageDialog(null,"Postagem removida com sucesso.");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null,"Erro ao remover postagem.");
            throw new RuntimeException(ex);
        } finally {
            fecharConexao();
        }

   
    }
    
}