/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import java.util.ArrayList;
import java.util.List;
import model.Parceiro;

/**
 *
 * @author 631510049
 */

public class ParceiroService {
     private List<Parceiro> listaParceiros;
    
    public ParceiroService() {
        listaParceiros = new ArrayList<>();
        
    }
    
    public void inserir(Parceiro parceiro) {
        listaParceiros.add(parceiro);
    }
    
    public List<Parceiro> listar() {
        return listaParceiros;
    }
    
    public Parceiro buscarPorId(int id) {
        for(Parceiro p : listaParceiros) {
            if(p.getId() == id) {
                return new Parceiro(p.getNomePagina(),p.getUrlPagina(),p.getNomeWebMaster(),p.getEmail());
          }
        }
        return null;
    }
    
    private int getIndice(int id) {
        for(int i=0;i<listaParceiros.size();i++){
            if(listaParceiros.get(i).getId() == id) {
                return i;
            }
        }
        return -1;
    }
    
    public void atualizar(Parceiro parceiro) {
        listaParceiros.set(this.getIndice(parceiro.getId()), 
            parceiro);
    }
    
    public void excluir(Parceiro parceiro) {
        listaParceiros.remove(this.getIndice(parceiro.getId()));
    }
}
