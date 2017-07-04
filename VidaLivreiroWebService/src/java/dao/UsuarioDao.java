/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import model.Usuario;




/**
 *
 * @author renat
 */
public interface UsuarioDao {
     public String procurarPorEmail(String email);
     public Usuario retornarUsuarioPorEmail(String email);
}
