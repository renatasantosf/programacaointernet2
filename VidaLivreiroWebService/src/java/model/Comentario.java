/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author 631510049
 */
@XmlRootElement
public class Comentario implements Serializable {
    private int id;
    private String nome;
    private String texto;

    public Comentario(int id, String nome, String texto) {
        this.id = id;
        this.nome = nome;
        this.texto = texto;
    }

    public Comentario(String nome, String texto) {
        this.nome = nome;
        this.texto = texto;
    }

    public Comentario() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }
    
    
    
}
