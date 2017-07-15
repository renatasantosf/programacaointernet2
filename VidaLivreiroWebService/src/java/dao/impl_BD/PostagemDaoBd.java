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
            
            String sql = "INSERT INTO postagem (titulo,texto,dtpostagem) "
                    + "VALUES (?,?,?)";

            //Foi criado um novo método conectar para obter o id
            conectarObtendoId(sql);
            comando.setString(1, postagem.getTitulo());
            comando.setString(2, postagem.getTexto());
            comando.setDate(3, java.sql.Date.valueOf(LocalDate.now()));
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
            String sql = "UPDATE postagem SET titulo=?, texto=?, dtPostagem=?"
                    + "WHERE id=?";

            conectar(sql);
            comando.setString(1, postagem.getTitulo());
            comando.setString(2, postagem.getTexto());
            comando.setDate(3, java.sql.Date.valueOf(LocalDate.now()));
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
 
        String sql = "SELECT id,titulo,dtpostagem FROM postagem";
        
        try {
            conectar(sql);

            ResultSet resultado = comando.executeQuery();

            while (resultado.next()) {
                int id = resultado.getInt("id");
                String titulo = resultado.getString("titulo");
                LocalDate dtPostagem = resultado.getDate("dtpostagem").toLocalDate();
           
                
                Postagem postagem = new Postagem(id, titulo, dtPostagem);                 

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
        
        
        String sql = "SELECT id,titulo,texto,dtpostagem FROM postagem WHERE id = ?";

        try {
            conectar(sql);
            comando.setInt(1, id);

            ResultSet resultado = comando.executeQuery();

            if (resultado.next()) {
                String titulo = resultado.getString("titulo");
                String texto = resultado.getString("texto");
                LocalDate dtPostagem = resultado.getDate("dtpostagem").toLocalDate();
             
                
                Postagem postagem = new Postagem(id, titulo, texto, dtPostagem);
                

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

    
    
}