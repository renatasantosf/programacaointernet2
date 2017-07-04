
package model;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author 631510049
 */
@XmlRootElement
public class Parceiro implements Serializable  {
    
    private int id;
    private String nomePagina;
    private String urlPagina;
    private String nomeWebMaster;
    private String email;

    public Parceiro(int id, String nomePagina, String urlPagina, String nomeWebMaster, String email) {
        this.id = id;
        this.nomePagina = nomePagina;
        this.urlPagina = urlPagina;
        this.nomeWebMaster = nomeWebMaster;
        this.email = email;
    }

    public Parceiro(String nomePagina, String urlPagina, String nomeWebMaster, String email) {
        this.nomePagina = nomePagina;
        this.urlPagina = urlPagina;
        this.nomeWebMaster = nomeWebMaster;
        this.email = email;
    }

    public Parceiro() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomePagina() {
        return nomePagina;
    }

    public void setNomePagina(String nomePagina) {
        this.nomePagina = nomePagina;
    }

    public String getUrlPagina() {
        return urlPagina;
    }

    public void setUrlPagina(String urlPagina) {
        this.urlPagina = urlPagina;
    }

    public String getNomeWebMaster() {
        return nomeWebMaster;
    }

    public void setNomeWebMaster(String nomeWebMaster) {
        this.nomeWebMaster = nomeWebMaster;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    
}
