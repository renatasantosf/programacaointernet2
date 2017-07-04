
package dao.impl_BD;

import dao.ContatoDao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JOptionPane;
import model.Contato;

/**
 *
 * @author 631510049
 */
public class ContatoDaoBd implements ContatoDao {
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
    public void salvar(Contato contato) {
        int id = 0;
        try {
            
            String sql = "INSERT INTO contato (nome,sobrenome,email,telefone,mensagem) "
                    + "VALUES (?,?,?,?,?)";

            //Foi criado um novo método conectar para obter o id
            conectarObtendoId(sql);
            comando.setString(1, contato.getNome());
            comando.setString(2, contato.getSobrenome());
            comando.setString(3, contato.getEmail());
            comando.setLong(4, contato.getTelefone());
            comando.setString(5, contato.getMensagem());
            comando.executeUpdate();
            //Obtém o resultSet para pegar o id
            ResultSet resultado = comando.getGeneratedKeys();
            if (resultado.next()) {
                //seta o id para o objeto
                id = resultado.getInt(1);
                contato.setId(id);
            }
            else{
                System.err.println("Erro de Sistema - Nao gerou o id conforme esperado!");
                throw new BDException("Nao gerou o id conforme esperado!");
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao salvar contato.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }
    }

    @Override
    public void deletar(Contato contato) {
        try {
            String sql = "DELETE FROM contato WHERE id = ?";

            conectar(sql);
            comando.setInt(1, contato.getId());
            comando.executeUpdate();

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao deletar contato.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }
    }

    
    @Override
    public void atualizar(Contato contato) {
        try {
            String sql = "UPDATE contato SET nome=?, sobrenome=?, email=?,telefone=?,mensagem=?"
                    + "WHERE id=?";

            conectar(sql);
            comando.setString(1, contato.getNome());
            comando.setString(2, contato.getSobrenome());
            comando.setString(3, contato.getEmail());
            comando.setLong(4, contato.getTelefone());
            comando.setString(5, contato.getMensagem());
            comando.setInt(6, contato.getId());
            comando.executeUpdate();

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao atualizar contato.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

    }

     //String nome, String sobrenome, String email, long telefone, String mensagem
   
    @Override
    public List<Contato> listar() {
        List<Contato> listaContatos = new ArrayList<>();

        String sql = "SELECT id,nome,sobrenome,email,telefone,mensagem FROM contato";

        try {
            conectar(sql);

            ResultSet resultado = comando.executeQuery();

            while (resultado.next()) {
                int id = resultado.getInt("id");
                String nome = resultado.getString("nome");
                String sobrenome = resultado.getString("sobrenome");
                String email = resultado.getString("email");
                long telefone = resultado.getLong("telefone");
                String mensagem = resultado.getString("mensagem");
                
                Contato contato = new Contato(id, nome, sobrenome,email,telefone,mensagem);

                listaContatos.add(contato);

            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar os contatos.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (listaContatos);
    }

    @Override
    public Contato procurarPorId(int id) {
        String sql = "SELECT id,nome,sobrenome,email,telefone,mensagem FROM contato WHERE id = ?";

        try {
            conectar(sql);
            comando.setInt(1, id);

            ResultSet resultado = comando.executeQuery();

            if (resultado.next()) {
                String nome = resultado.getString("nome");
                String sobrenome = resultado.getString("sobrenome");
                String email = resultado.getString("email");
                long telefone = resultado.getLong("telefone");
                String mensagem = resultado.getString("mensagem");
               

                Contato contato = new Contato(id, nome, sobrenome,email,telefone,mensagem);

                return contato;
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar o contato pelo id.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (null);
    }

    @Override
    public void deletar(int id) {
          try {
            String sql = "DELETE FROM contato WHERE id = ?";
            
            
            conectar(sql);
            comando.setInt(1, id);
            comando.executeUpdate();
            JOptionPane.showMessageDialog(null,"Contato removido com sucesso.");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null,"Erro ao remover contato.");
            throw new RuntimeException(ex);
        } finally {
            fecharConexao();
        }

   
    }
    
}


