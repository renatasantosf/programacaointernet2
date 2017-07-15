
package model;

import java.io.Serializable;
import java.time.LocalDate;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author 631510049
 */
@XmlRootElement
public class Postagem implements Serializable {
     private int id;
     private String titulo;
     private String texto;
     private LocalDate dtPostagem;
    

    public Postagem(int id, String titulo, String texto, LocalDate dtPostagem) {
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
        this.dtPostagem = dtPostagem;
        
    }

    public Postagem(String titulo, String texto, LocalDate dtPostagem) {
        this.titulo = titulo;
        this.texto = texto;
        this.dtPostagem = dtPostagem;
        
    }
    
    
    public Postagem(int id, String titulo, LocalDate dtPostagem) {
        this.id = id;
        this.titulo = titulo;
        this.dtPostagem = dtPostagem;
        
    }

    public Postagem() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public LocalDate getDtPostagem() {
        return dtPostagem;
    }

    public void setDtPostagem(LocalDate dtPostagem) {
        this.dtPostagem = dtPostagem;
    }
     
     
     
    
    
}
