
package dao.impl_BD;
import dao.UsuarioDao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.Usuario;

/**
 *
 * @author renat
 */
public class UsuarioDaoBd implements UsuarioDao{
    
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
    public String procurarPorEmail(String email) {
        String sql = "SELECT email,senha,nome FROM usuario WHERE email = ?";

        try {
            conectar(sql);
            comando.setString(1, email);

            ResultSet resultado = comando.executeQuery();

            if (resultado.next()) {
                String senha = resultado.getString("senha");
                String nome = resultado.getString("nome");
                
               Usuario usuario = new Usuario(email,senha,nome);


              

                return email;
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar usuario pelo id.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (null);
    }
    
    @Override
    public Usuario retornarUsuarioPorEmail(String email) {
        String sql = "SELECT email,senha,nome FROM usuario WHERE email = ?";

        try {
            conectar(sql);
            comando.setString(1, email);

            ResultSet resultado = comando.executeQuery();

            if (resultado.next()) {
                String senha = resultado.getString("senha");
                String nome = resultado.getString("nome");
                
               Usuario usuario = new Usuario(email,senha,nome);
                      
               return usuario;
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar usuario pelo id.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (null);
    }

}
