
package dao.impl_BD;

import dao.ParceiroDao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JOptionPane;
import model.Parceiro;

/**
 *
 * @author 631510049
 */
public class ParceiroDaoBd implements ParceiroDao {
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

  //int id, String nomePagina, String urlPagina, String nomeWebMaster, String email
    @Override
    public void salvar(Parceiro parceiro) {
        int id = 0;
        try {
            
            String sql = "INSERT INTO parceiro (nomepagina,urlpagina,nomewebmaster,email) "
                    + "VALUES (?,?,?,?)";

            //Foi criado um novo método conectar para obter o id
            conectarObtendoId(sql);
            comando.setString(1, parceiro.getNomePagina());
            comando.setString(2, parceiro.getUrlPagina());
            comando.setString(3, parceiro.getNomeWebMaster());
            comando.setString(4, parceiro.getEmail());
            comando.executeUpdate();
            //Obtém o resultSet para pegar o id
            ResultSet resultado = comando.getGeneratedKeys();
            if (resultado.next()) {
                //seta o id para o objeto
                id = resultado.getInt(1);
                parceiro.setId(id);
            }
            else{
                System.err.println("Erro de Sistema - Nao gerou o id conforme esperado!");
                throw new BDException("Nao gerou o id conforme esperado!");
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao salvar parceiro.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }
    }

    @Override
    public void deletar(Parceiro parceiro) {
        try {
            String sql = "DELETE FROM parceiro WHERE id = ?";

            conectar(sql);
            comando.setInt(1, parceiro.getId());
            comando.executeUpdate();

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao deletar parceiro.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }
    }

   
    @Override
    public void atualizar(Parceiro parceiro) {
        try {
            String sql = "UPDATE parceiro SET nomepagina=?, urlpagina=?, nomewebmaster=?,email=?"
                    + "WHERE id=?";

            conectar(sql);
            comando.setString(1, parceiro.getNomePagina());
            comando.setString(2, parceiro.getUrlPagina());
            comando.setString(3, parceiro.getNomeWebMaster());
            comando.setString(4, parceiro.getEmail());
            comando.setInt(5, parceiro.getId());
            comando.executeUpdate();

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao atualizar contato.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

    }

     
   
    @Override
    public List<Parceiro> listar() {
        List<Parceiro> listaParceiros = new ArrayList<>();

        String sql = "SELECT  FROM parceiro";

        try {
            conectar(sql);
            ResultSet resultado = comando.executeQuery();

            while (resultado.next()) {
                int id = resultado.getInt("id");
                String nomePagina = resultado.getString("nomepagina");
                String urlPagina = resultado.getString("urlPagina");
                String nomeWebMaster = resultado.getString("nomewebmaster");
                String email = resultado.getString("email");
                
                Parceiro parceiro = new Parceiro(id, nomePagina,urlPagina,nomeWebMaster,email);

                listaParceiros.add(parceiro);

            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar os parceiros.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (listaParceiros);
    }

    
    @Override
    public Parceiro procurarPorId(int id) {
        String sql = "SELECT nomepagina,urlpagina,nomewebmaster,email FROM parceiro WHERE id = ?";

        try {
            conectar(sql);
            comando.setInt(1, id);

            ResultSet resultado = comando.executeQuery();

            if (resultado.next()) {
                String nomePagina = resultado.getString("nomepagina");
                String urlPagina = resultado.getString("urlPagina");
                String nomeWebMaster = resultado.getString("nomewebmaster");
                String email = resultado.getString("email");
                
                Parceiro parceiro = new Parceiro(id, nomePagina,urlPagina,nomeWebMaster,email);
                return parceiro;
            }

        } catch (SQLException ex) {
            System.err.println("Erro de Sistema - Problema ao buscar o parceiro  pelo id.");
            throw new BDException(ex);
        } finally {
            fecharConexao();
        }

        return (null);
    }

    @Override
    public void deletar(int id) {
          try {
            String sql = "DELETE FROM parceiro WHERE id = ?";
                        
            conectar(sql);
            comando.setInt(1, id);
            comando.executeUpdate();
            JOptionPane.showMessageDialog(null,"Parceiro removido com sucesso.");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null,"Erro ao remover Parceiro.");
            throw new RuntimeException(ex);
        } finally {
            fecharConexao();
        }

   
    }
    
    
}
